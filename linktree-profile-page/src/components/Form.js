const Form = () => {
    return (
        <form>
            <div className="form-control">
                <label>First name</label>
                <input id="first__name" name="first name" type="text" />
            </div>
            <div className="form-control">
                <label>Last name</label>
                <input id="last__name" name="last name" type="text" />
            </div>
            <div className="form-control">
                <label>Email name</label>
                <input id="email" name="email" type="text" />
            </div>
            <div className="form-control">
                <label>Message</label>
                <textarea id="message" name="message" />
            </div>
            <div className="form-control form-control-check">
                <label>You agree to providing your data to Daniel Ezekiel who may contact you</label>
                <input id="first__name" name="first name" type="checkbox" />
            </div>
        </form>
    );
}

export default Form;