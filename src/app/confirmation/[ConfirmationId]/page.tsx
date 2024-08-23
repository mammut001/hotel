
export default function RoomPage({ params }: { params: { ConfirmationId: string } }) {
  const confirmationId = decodeURIComponent(params.ConfirmationId)


  return (

    <main className="container mx-auto p-4 relative min-h-screen">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <p className="text-center font-mono text-sm text-muted-foreground">
          ConfirmationID {confirmationId}
        </p>
      </section>


    </main>
  )
}
