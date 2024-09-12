import React, { useEffect, useState } from "react";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread, LoadingIndicator,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import { ChannelSort, StreamChat } from "stream-chat";

import Button from "@mui/material/Button";
import {DeleteIcon} from "lucide-react";

const apiKey = process.env.STREAMCHAT_API_KEY;
const userId = process.env.STREAMCHAT_USER_ID;
const token = process.env.STREAMCHAT_TOKEN;

import { useChatWindowStore } from "@/store/useChatWindowStore";

const user = {
  id: 'john',
  name: 'john',
  image: 'https://getstream.imgix.net/images/random_svg/ZS.png'
}

const filters = { members: { $in: [userId] }, type: 'messaging' }
const options = { presence: true, state: true }
const sort: ChannelSort = { last_message_at: -1 }


export const ChatWindow: React.FC = () => {
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<any | null>(null)
  const toggleChatWindowOff = useChatWindowStore(state => state.setClose)
  const handleClose = ()=>{
    toggleChatWindowOff()
  }
  useEffect(() => {
    const chatClient = StreamChat.getInstance(apiKey!)

    async function init() {
      try {
        await chatClient.connectUser(user, chatClient.devToken(user.id));

        const channel = chatClient.channel('messaging', 'talk1', {
          image: 'https://getstream.imgix.net/images/random_svg/CZ.png',
          name: 'Chat',
          members: [user.id],
        });

        await channel.watch();

        setChannel(channel);
        setClient(chatClient);
      } catch (error) {
        console.error('Error initializing chat:', error)
      }
    }

    init();

    return () => {
      if (client) {
        client.disconnectUser();
      }
    };
  }, [client])

  if(!client || !channel) return <LoadingIndicator />;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[350px] bg-white rounded shadow-2xl ">
      <Chat client={client} theme='messaging light'>
        <div className="flex justify-between items-center p-2 bg-black ">
          <h3 className="text-white	">Live Chat</h3>
          <Button
            onClick={handleClose}
            className="">
            <DeleteIcon/>
          </Button>

        </div>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>

      </Chat>
    </div>

  );
};
