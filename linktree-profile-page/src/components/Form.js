import { useState } from "react";


const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [permission, setPermission] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();       

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setPermission(false);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>First name</label>
                <input  id="first_name"
                        name="first name" 
                        type="text" 
                        placeholder="Enter your first name" 
                        value={firstName} 
                        onChange={ (e) => setFirstName(e.target.value) } required
                    />
            </div>

            <div className="form-control">
                <label>Last name</label>
                <input  id="last_name" 
                        name="last name" 
                        type="text" 
                        value={lastName}
                        onChange={ (e) => setLastName(e.target.value)}
                        placeholder="Enter your last name" 
                        required
                    />
            </div>

            <div className="form-control">
                <label>Email</label>
                <input  id="email" 
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder="yourname@email.com" 
                        required
                    />
            </div>

            <div className="form-control">
                <label>Message</label>
                <textarea  id="message" 
                            name="message" 
                            value={message}
                            onChange={ (e) => setMessage(e.target.value) }
                            placeholder="Send me a message and I'll reply you as soon as possible..." 
                            required
                        />
            </div>

            <div className="form-control form-control-check">
                <label>You agree to providing your data to Daniel Ezekiel who may contact you</label>
                <input  id="checkbox" 
                            name="agreement" 
                            type="checkbox" 
                            checked={permission}
                            value={permission}
                            onChange={ (e) => setPermission(e.currentTarget.checked) }
                            required 
                        />
            </div>

            <button  id="btn__submit" value="Send Message">Send Message</button>
        </form>
    );
}

export default Form;