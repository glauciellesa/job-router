const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <div>
          <label htmlFor="email">Your email:</label>
          <input id="email" type="email" name="email" required />
        </div>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
