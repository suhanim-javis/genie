import { useEffect } from "react"
import ChatUI from "../components/ChatUI"

const ChatEmbed = () => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token') || ''
    const theme = params.get('theme') || ''

    useEffect(() => {
        window.parent.postMessage({ type: 'genie-ready', feature: 'chat'}, '*')
    }, [])

    return (
        <ChatUI token={token} theme={theme} />
    )
}

export default ChatEmbed