
const MiniContactForm = () => {
    return (
        <form className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1 custom-email-input'>
                <label>Email</label>
                <input type="email" placeholder="Example@email.com" />
            </div>
            <div className='flex flex-col gap-1 custom-textarea'>
                <label>Query/Message</label>
                <textarea placeholder="Your message . . ." rows={5} />
            </div>
        </form>
    )
}

export default MiniContactForm