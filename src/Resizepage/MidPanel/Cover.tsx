// import generateRandomISBN from "../../Service/RandomISBN";
// const Cover = () => {

//     const test = generateRandomISBN()
//     console.log(test);

//     return (
//         <div>
//             <img
//                 src={`https://covers.openlibrary.org/b/isbn/${test}-L.jpg`}
//                 alt="cover"
//             />

//         </div>
//     );
// };

// export default Cover;


function Cover() {
  return (
    <div>
        <img
            alt="test_img"
            src="https://covers.openlibrary.org/b/isbn/0385472579-L.jpg"
            className="w-[100px] h-[150px]"
        />
    </div>
  )
}

export default Cover