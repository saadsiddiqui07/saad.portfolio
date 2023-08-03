import React, {
  Dispatch,
  FormEvent,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";
import BackIcon from "@/components/icons/BackIcon";
import toast from "react-hot-toast";
import Link from "next/link";
import Head from "next/head";

interface InputTypes {
  inpLabel: string;
  inputType?: HTMLInputTypeAttribute | "textarea";
  id: string;
  placeholder: string;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

const GETFORM_KEY = process.env.NEXT_PUBLIC_GETFORM_KEY;

function Input({
  inpLabel,
  inputType = "text",
  id,
  placeholder,
  state,
  setState,
}: InputTypes) {
  return (
    <section className="mb-3">
      <label className="block text-lg" htmlFor={id}>
        {inpLabel}
      </label>
      {inputType === "textarea" ? (
        <textarea
          value={state}
          onChange={(e) => setState(e.target.value)}
          id={id}
          placeholder={placeholder}
          className="w-full rounded bg-slate-200 p-3 dark:bg-[#3B3B3B]"
          rows={6}
          required
        ></textarea>
      ) : (
        <input
          type={inputType}
          value={state}
          onChange={(e) => setState(e.target.value)}
          id={id}
          placeholder={placeholder}
          className="w-full rounded bg-slate-200 p-3 dark:bg-[#3B3B3B]"
          required
        />
      )}
    </section>
  );
}

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await fetch(`https://getform.io/f/${GETFORM_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: message,
        }),
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully", {
        position: "top-right",
        style: { backgroundColor: "royalblue", color: "white" },
        duration: 4000,
      });
    } catch (err) {
      toast.error("Something went wrong", {
        position: "top-center",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`container px-4 py-5 md:py-10 my-10 md:px-1`}>
      <Head>
        <title>Saad Siddiqui | Contact</title>
      </Head>
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transition duration-200 ease-out hover:scale-125"
        >
          <BackIcon />
        </Link>
        <h1 className="font-bold text-xl">Back</h1>
      </div>
      {/* <h1 className="text-xl md:text-2xl text-center">Contact Me</h1> */}
      <p className="my-6 text-lg text-zinc-500 text-center">
        Feel free to reach out if you have a question, want to hire, or just
        want to connect.
      </p>
      {/* <p className="mb-7 text-lg">
        Email me at{" "}
        <a
          href="mailto:siddiquisaad1601@gmail.com"
          className="italic underline"
        >
          siddiquisaad1601@gmail.com
        </a>{" "}
        or fill the below form.
      </p> */}
      <form
        id="saad-dev-form"
        className="mx-auto max-w-[500px]"
        onSubmit={handleSubmit}
      >
        <Input
          inpLabel="Your Name"
          inputType="text"
          id="name"
          placeholder="John Doe"
          state={name}
          setState={setName}
        />
        <Input
          inpLabel="Email"
          inputType="email"
          id="email"
          placeholder="username@domain.com"
          state={email}
          setState={setEmail}
        />
        <Input
          inpLabel="Message"
          inputType="textarea"
          id="message"
          placeholder="I need a website for my business / personal portfolio website, let's connect and dicsuss more!"
          state={message}
          setState={setMessage}
        />
        <button
          type="submit"
          className="mt-3 mb-6 w-full rounded bg-black px-4 py-2 text-white disabled:cursor-wait dark:bg-white dark:text-black"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
