const Contact = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:sribommireddy@gmail.com";
  };
  return (
    <div className="grid justify-items-center">
      <div class="md:row-start-2 grid justify-items-center">
        <div className="text-5xl italic my-3 text-slate-200">Get In Touch</div>
        <div className="text-small text-center my-3 p-5 text-slate-200">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </div>
        <button
          className="w-1/5 border border-radius-2 border-slate-200 text-slate-200 rounded-md my-3"
          onClick={handleMailClick}
        >
          Mail
        </button>
      </div>
    </div>
  );
};

export default Contact;
