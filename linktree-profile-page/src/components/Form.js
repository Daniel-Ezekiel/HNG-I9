const Form = () => {
    return (
        <form>
            <div className="form-control">
                <label>First name</label>
                <input id="first_name" name="first name" type="text" placeholder="Enter your first name" required/>
            </div>
            <div className="form-control">
                <label>Last name</label>
                <input id="last_name" name="last name" type="text" placeholder="Enter yourlast name" required/>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input id="email" name="email" type="email" placeholder="yourname@email.com" required/>
            </div>
            <div className="form-control">
                <label>Message</label>
                <textarea id="message" name="message" placeholder="Send me a message and I'll reply you as soon as possible..." required/>
            </div>
            <div className="form-control form-control-check">
                <label>You agree to providing your data to Daniel Ezekiel who may contact you</label>
                <input id="checkbox" name="agreement" type="checkbox" required />
            </div>
            <button id="btn__submit" value="Send Message">Send Message</button>
        </form>
    );
}

export default Form;