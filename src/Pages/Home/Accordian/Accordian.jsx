
const Accordian = () => {
    return (
        <div className="mt-32">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mt-2 mb-14">Frequently Asked Questions</h2>
            <div className="space-y-3 mx-1 md:mx-20">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How to create a contest?
                    </div>
                    <div className="collapse-content">
                        <p>Create an account using an authentic email account. Then contact to the Admin for becoming a creator. Then admin would approve your request and you will finde a creator section i nyour dashboard. From there you can create and manage your contests.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How to register for a contest?
                    </div>
                    <div className="collapse-content">
                        <p>Go to the all contests section. From there choose your specific niche where you want to participate in a contest. Then click on the details. After that you will go through the payment processing. Then provide your credit card credentials. Now you are successfully registered for the contest.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How to be an admin?
                    </div>
                    <div className="collapse-content">
                        <p>Sorry! You cannot be the admin.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How to get a certificate from Contestopia?
                    </div>
                    <div className="collapse-content">
                        <p>If you successfully complete any of the two contest and hold a place with recognition then you will recieve a certificate from Contestopia.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;