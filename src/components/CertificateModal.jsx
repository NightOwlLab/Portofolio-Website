const CertificateModal = ({ image }) => {
    return <>
        <div className="modal fade" id="certificate-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Certificate</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img className="w-100" src={image} alt="certificate-image" />
                </div>
                </div>
            </div>
        </div>
    </>
}

export default CertificateModal;