import CardList from "../../components/card/card";
import Footer from "../../components/footer/footer";
import For_U from "../../components/forU/for_U";
import Header from "../../components/header/header";
import p1 from "../../images/Picture.png"
import p2 from "../../images/Picture2.png"
import p3 from "../../images/Picture3.png"
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import FeaturedCategoric from "../../components/FeaturedCategorie/Featured_categorie";
import NewReleases from "../../components/FeaturedCategorie/NewReleases";

function UserHome() {
    const { user } = useContext(UserContext);
    return (
        <>
            {/* header section */}
            <Header />

            {/* section1 */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#f4eae4] min-h-screen px-6 md:px-20 py-10 relative overflow-hidden">

                {/* Text content */}
                <div className="max-w-4xl text-center md:text-left mt-20 md:mt-0 ">
                    <h1 className="text-6xl tracking-widest">
                        <span className="mr-8 my-5">B e c a u s e</span>
                        <span className="mr-8">E v e r y</span> <br />
                        <span>W o r d <span className="mr-8 ml-8">D e s e r v e s </span> </span>
                        <br /> <span className="mr-8">t o </span> B e H e a r d

                    </h1>
                    <p className="mt-6 text-lg tracking-wider text-[#1e2d3d] font-medium">
                        From Page To Voice, Stories Come<br />Alive Like Never Before.
                    </p>
                    {!user && (
                        <Link to="/login">
                            <button className="mt-8 px-8 py-3 bg-[#1e2d3d] text-white text-lg font-bold rounded-md shadow hover:bg-[#16222f] transition">
                                Login
                            </button>
                        </Link>
                    )}
        
                </div>

                {/* Books image */}
                <div className="mt-12 md:mt-0">
                    <img
                        src="../../../public/books.png"
                        alt="Books"
                        className="w-[600px] md:w-[350px] lg:w-[500px] "
                    />
                </div>
            </div>
            {/* end sec1 */}
<FeaturedCategoric/>

            {/* sec2 */}
            <div className="mx-10 my-10">
                <h2 className="text-5xl  font-bold mt-10 mb-5 mx-5 ">
                    T r e n d i n g
                    <div className="w-[200px] h-1 bg-black mt-5 mb-5 rounded"></div>
                </h2>
                <CardList />
            </div>
            {/* end sec2 */}

    <section class="bg-[#f4eae4] ">
                <div class="container lg:px-[150px] py-10 mx-auto ">
                    <div class="lg:-mx-6 lg:flex lg:items-center">
                        <img class="object-cover object-center lg:w-[500px] lg:mx-5 w-[25rem] mx-11 h-96 rounded-lg lg:h-[30rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                        <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 mx-10 my-4">

                            <h1 class="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
                                Get over a 100 free books
                            </h1>

                            <p class=" lg:max-w-lg mt-6 text-black ">
                                Get access by subcribing to our newsletter. Jump
                                start your book reading by quickly check through the
                                popular book categories...
                            </p>

                            <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                            <p class="text-gray-600 ">Marketing Manager at Stech</p>

                            <div className="flex rounded-md overflow-hidden lg:w-full max-w-md   py-4">
                                <input
                                    type="email"
                                    placeholder="Enter email address..."
                                    className="px-4 py-2 w-full text-gray-700 placeholder-gray-400 focus:outline-none"
                                />
                                <button className="bg-[#2c3e50] text-white px-6 py-2 font-semibold hover:bg-[#1a252f] transition-colors">
                                    Get free books
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





<NewReleases/>
            {/* sec3 */}
        
            {/* end sec3 */}

            {/* sec4 */}
            <section>
                <For_U />
            </section>
            {/* end sec5 */}


            {/* sec5 */}
            <section className="bg-[#f4eae4] mb-8 mt-8 w-[90%] lg:text-center mx-auto rounded-2xl">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                            Latest Articles

                        </h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Read our Article
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 mx-8">
                        {/* Blog Card */}
                        {[
                            {
                                img: p1,
                                title: "Reading books always makes the moments happy",
                            },
                            {
                                img: p2,
                                title: "Reading books always makes the moments happy",
                            },
                            {
                                img: p3,
                                title: "Reading books always makes the moments happy",
                            },
                        ].map((post, index) => (
                            <div key={index}>
                                <div className="relative">
                                    <img
                                        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                                        src={post.img}
                                        alt="blog"
                                    />

                                </div>

                                <h1 className="mt-6 text-xl font-semibold text-gray-800">{post.title}</h1>

                                <div className="w[100%] h-1 bg-[#2c3e50] my-6 rounded"></div>

                                <p className="text-sm text-gray-500 text-left">
                                    2 aug, 2021

                                </p>
                                <a href="#" className="  mt-4 text-[#2c3e50] underline hover:text-[#7797b7]  text-right">
                                    Read more
                                </a>


                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* end sec5 */}


            {/* footer */}
            <Footer />

        </>
    );
}
export default UserHome;