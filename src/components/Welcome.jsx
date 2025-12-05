
const Welcome = () => {
    return (
        <div>
            <label for="email-address" className=" block">Email address</label>
            <div className="">
                <input id="email-address" type="email" name="email" required placeholder="Enter your email" autocomplete="email" class="" />
            </div>
            <button type="submit" class="">Subscribe</button>
        </div>
    );
};

export default Welcome;