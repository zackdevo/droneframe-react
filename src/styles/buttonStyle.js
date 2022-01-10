const buttonStyle = {
    marginBottom: "10px",
    backgroundColor: "rgba(36, 40, 52, 0.3)",
    borderRadius: "20px",
    border: "2px solid rgba(125, 119, 114, 0.8)",
    color: "rgba(255, 255, 255, 1)",
    "&:hover": {
        color: "rgba(36, 40, 52, 0.6)",
        backgroundColor: "rgba(229, 229, 229, 0.1)",
        border: "2px solid rgba(36, 40, 52, 0.6) "
    },
    "&:hover .iconBtn": {
        animation: "shake 2s linear infinite"
    },
    transition: "400ms"
}

export default buttonStyle