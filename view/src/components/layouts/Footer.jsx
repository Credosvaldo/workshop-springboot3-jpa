import { FaPix, FaCcVisa, FaCcMastercard, FaFileInvoice, FaCcAmazonPay, FaCcAmex, FaGithub, FaLinkedin  } from "react-icons/fa6";


function Footer() {

    return (
        <div className="row bg-color-4 m-0 bottom-0 text-white p-5">
            
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
                    <div className="display-6 row">
                        <FaPix className="col-4"></FaPix>
                        <FaCcVisa className="col-4"></FaCcVisa>
                        <FaCcMastercard className="col-4"></FaCcMastercard>
                        <FaFileInvoice className="col-4"></FaFileInvoice>
                        <FaCcAmazonPay className="col-4"></FaCcAmazonPay>
                        <FaCcAmex className="col-4"></FaCcAmex>

                    </div>
                </div>

            </div>

            <div className="d-flex flex-wrap col-4 justify-content-center">
                <div className="w-75">
                    <h5>Redes sociais</h5>


                    <FaGithub></FaGithub>
                    <FaLinkedin></FaLinkedin>

                </div>
            </div>
        </div>
    )
}

export default Footer