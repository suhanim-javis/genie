const ChatUI = ({token, theme}: {token: string, theme: string}) => {
    return (
        <div style={{ background: theme==='dark' ? '#222' : '#fff', padding: '1rem'}}>
            <h2>Genie Chat (token : {token})</h2>
            <p>Chat interface goes here</p>
        </div>
    )
}

export default ChatUI