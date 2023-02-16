import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <div>
          <label htmlFor="email">Your email:</label>
          <input id="email" type="email" name="email" required />
        </div>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }: any) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log({ submission });
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 char long" };
  }
  // redirect funtion is a router method that allows do some action after the use submit his form
  return redirect("/");
};
