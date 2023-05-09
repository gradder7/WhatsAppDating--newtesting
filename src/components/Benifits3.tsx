const Benifits3 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-4 md:flex-row md:px-24 lg:px-48">
      {/* Image on left */}
      <div className="mb-8 w-full md:mb-0 md:mr-10 md:w-1/2">
        <img
          src="https://shagle.com/assets/img/landing/girls.svg"
          alt="Image"
          width={500}
          height={500}
        />
      </div>
      {/* Text on right */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Title of the text
        </h2>
        <p className="mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>
    </div>
  );
};
export default Benifits3;
