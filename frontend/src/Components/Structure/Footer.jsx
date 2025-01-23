import Newsletter from "./NewsLetter";
import { Visa, MasterCard, PayPal, GooglePay, ApplePay } from "../../assets/Images";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div className="flex justify-center mt-[200px]">
                <div className="w-screen h-auto bg-[#F0F0F0] py-8">
                    <div className="mb-8">
                        {/* News Letter Component */}
                        <Newsletter />
                        {/* Footer Section Design */}
                        <div className="border-b-4 pb-10 px-4 sm:px-8 lg:ml-[200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-[50px]">
                            {/* Logo and Description */}
                            <div className="text-center sm:text-left">
                                <h2 className="text-4xl font-bold mb-4">SHOP.CO</h2>
                                <p className="text-gray-600 text-sm mt-4 max-w-[250px] mx-auto sm:mx-0">
                                    We have clothes that suit your style and which you're proud to wear. From women to men.
                                </p>
                                {/* Social Media Icons */}
                                <div className="flex justify-center sm:justify-start space-x-4 mt-8">
                                    <a href="https://www.linkedin.com/in/yakoub-benaissa-075a62314/" target="_blank" className="text-black">
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100072694312166" target="_blank" className="text-black">
                                        <FaFacebook className="text-xl" />
                                    </a>
                                    <a href="https://www.instagram.com/yakoub._benaissa/profilecard/?igsh=OWtsM3R5ZXZlbml2" target="_blank" className="text-black">
                                        <FaInstagram className="text-xl" />
                                    </a>
                                    <a href="https://github.com/YakoubBenaisa" target="_blank" className="text-black">
                                        <FaGithub className="text-xl" />
                                    </a>
                                </div>
                            </div>

                            {/* Company Links */}
                            <div className="text-center sm:text-left">
                                <h3 className="font-semibold text-lg mb-6">COMPANY</h3>
                                <ul className="text-gray-600 text-sm space-y-4">
                                    <li><a href="#" className="hover:underline">About</a></li>
                                    <li><a href="#" className="hover:underline">Features</a></li>
                                    <li><a href="#" className="hover:underline">Works</a></li>
                                    <li><a href="#" className="hover:underline">Career</a></li>
                                </ul>
                            </div>

                            {/* Help Links */}
                            <div className="text-center sm:text-left">
                                <h3 className="font-semibold text-lg mb-6">HELP</h3>
                                <ul className="text-gray-600 text-sm space-y-4">
                                    <li><a href="#" className="hover:underline">Customer Support</a></li>
                                    <li><a href="#" className="hover:underline">Delivery Details</a></li>
                                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                </ul>
                            </div>

                            {/* FAQ Links */}
                            <div className="text-center sm:text-left">
                                <h3 className="font-semibold text-lg mb-6">FAQ</h3>
                                <ul className="text-gray-600 text-sm space-y-4">
                                    <li><a href="#" className="hover:underline">Account</a></li>
                                    <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
                                    <li><a href="#" className="hover:underline">Orders</a></li>
                                    <li><a href="#" className="hover:underline">Payments</a></li>
                                </ul>
                            </div>

                            {/* Resources Links */}
                            <div className="text-center sm:text-left">
                                <h3 className="font-semibold text-lg mb-6">RESOURCES</h3>
                                <ul className="text-gray-600 text-sm space-y-4">
                                    <li><a href="#" className="hover:underline">Free eBooks</a></li>
                                    <li><a href="#" className="hover:underline">Development Tutorial</a></li>
                                    <li><a href="#" className="hover:underline">How to - Blog</a></li>
                                    <li><a href="#" className="hover:underline">YouTube Playlist</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-[200px] mt-8">
                        <span className="text-[14px] text-[rgba(0,0,0,0.6)] mb-4 sm:mb-0">
                            © 2000-2024, All rights reserved
                        </span>
                        <div className="flex space-x-4">
                            <img src={Visa} alt="Visa" className="min-w-[25px] min-h-[25px]" />
                            <img src={MasterCard} alt="MasterCard" className="min-w-[25px] min-h-[25px]" />
                            <img src={PayPal} alt="PayPal" className="min-w-[25px] min-h-[25px]" />
                            <img src={GooglePay} alt="GooglePay" className="min-w-[25px] min-h-[25px]" />
                            <img src={ApplePay} alt="ApplePay" className="min-w-[25px] min-h-[25px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;