const Contact = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:sribommireddy@gmail.com";
  };
  return (
    <div className="grid justify-items-center py-5">
      <div className="md:row-start-2 grid justify-items-center text-black">
      <h1 className="text-center font-bold text-3xl">Get In Touch</h1>
        <div className="text-small text-center my-3 p-5">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </div>
        <button
          className="w-1/5 text-white p-2 font-semibold hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 bg-webColor rounded-md my-3"
          onClick={handleMailClick}
        >
          Mail
        </button>
      </div>
    </div>
  );
};

export default Contact;
