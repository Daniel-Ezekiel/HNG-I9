import { FaTimes } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Button from './Button';
import '../modal.css';


const Modal = () => {
	const closeModal = (e) => {
		const modal = document.querySelector('.modal-overall-container');

		modal.classList.remove('active')
		console.log(e)
	}

  return (
    <div className="modal-overall-container">
        <div className="modal-overlay">

        </div>    
    
        <div className="modal">
            <div className="modal-title">
                <h3>Connect Wallet</h3>

                <FaTimes onClick={closeModal}/>
            </div>

            <div className="modal-wallets">
                <p>Choose your preferred wallet:</p>

                <button className="btn__metamask" onClick={closeModal}>
                    <Button id="btn__metamask" url="#" linkName={<img src="img/metamask.png" alt="brand-logo" />} />
                    <FaChevronRight /> 
                </button>

                <button className="btn__walletconnect" onClick={closeModal}>
                    <Button id="btn__walletconnect" url="#" linkName={<img src="img/walletconnect.png" alt="brand-logo" />} />
                    <FaChevronRight /> 
                </button>
            </div>
        </div>
    </div>

  )
}

export default Modal