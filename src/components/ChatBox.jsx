import Message from "./Message"

const ChatBox = () => {

    const messages = [
        {
            id: 1,
            text: "Hello there!",
            name: "Aryan"
        },
        {
            id: 2,
            text: "Hi!",
            name: "Jackson"
        }
    ]

  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message key={message.id} message={message}/>
        ))}
    </div>
  )
}

export default ChatBox