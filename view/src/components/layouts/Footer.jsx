import { FaPix, FaCcVisa, FaCcMastercard, FaFileInvoice, FaCcAmazonPay, FaCcAmex, FaGithub, FaLinkedin  } from "react-icons/fa6";


function Footer() {

    return (
        <footer className="row bg-color-4 m-0 bottom-0 text-white p-5">
            
            <div className="d-flex flex-wrap col-4 justify-content-center">
                <div className="w-75">
                    <h5>Sobre nós</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum repellat, nemo iste, cum sit alias fuga consectetur qui quo maiores eveniet officiis quia voluptas vero? Minima doloremque obcaecati dolor asperiores.
                    </p>
                </div>
            </div>

            <div className="d-flex flex-wrap col-4 justify-content-center">
                <div className="w-75">
                    <h5>Formas de pagamento</h5>
                    <div className="display-6">
                        <FaPix className="m-3"></FaPix>
                        <FaCcVisa className="m-3"></FaCcVisa>
                        <FaCcMastercard className="m-3"></FaCcMastercard>
                        <FaFileInvoice className="m-3"></FaFileInvoice>
                        <FaCcAmazonPay className="m-3"></FaCcAmazonPay>
                        <FaCcAmex className="m-3"></FaCcAmex>

                    </div>
                </div>

            </div>

            <div className="d-flex flex-wrap col-4 justify-content-center">
                <div className="w-75">
                    <h5>Redes sociais</h5>

                    <div>
                        <FaGithub className="h3"></FaGithub> Github
                    </div>

                    <div>
                        <FaLinkedin className="h3"></FaLinkedin> Linkedin
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer