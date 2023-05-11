require("./App.css");
var $lsnuL$reactjsxruntime = require("react/jsx-runtime");
var $lsnuL$react = require("react");
var $lsnuL$reactdomclient = require("react-dom/client");
var $lsnuL$reactrouterdom = require("react-router-dom");
var $lsnuL$reactredux = require("react-redux");
var $lsnuL$reduxjstoolkit = require("@reduxjs/toolkit");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










const $2fd16d837f94b7a8$var$Header = ()=>{
    const cartItems = (0, $lsnuL$reactredux.useSelector)((store)=>store.cart.cartItems);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "flex w-[100%] items-center justify-between mob:justify-normal shadow-lg h-14 left-0 top-0",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.Link), {
                to: "/",
                children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                            children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjunLTj0CdbpCMM0yRd61KuvwQyvVf8O-DKg&usqp=CAU",
                                alt: "logo",
                                className: "h-16 p-2 mx-2 xsm:h-12 mob:h-10"
                            })
                        }),
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                            children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("p", {
                                className: "font-bold text-xl sm:text-sm xsm:text-xs mob:text-xs",
                                children: "FOODELIVERY"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("ul", {
                    className: "flex text-xl sm:text-sm xsm:text-xs mob:text-xs",
                    children: [
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.Link), {
                            to: "/",
                            children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("li", {
                                className: "px-4 xsm:px-2 mob:px-1 cursor-pointer",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("li", {
                            className: "px-4 xsm:px-2 mob:px-1 cursor-pointer",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.Link), {
                            to: "/instamart",
                            children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("li", {
                                className: "px-4 xsm:px-2 mob:px-1 cursor-pointer",
                                children: "Instamart"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.Link), {
                to: "/cart",
                children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                            children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                                className: "h-16 p-2 xsm:h-12 mob:h-10 ",
                                src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxIRERYQEREREBISEBYQFhEWFhERERERFhYZGRgTGRYaHysiGhwoHRkaJDQjKCwyMTExGSE3PDcwOyswMS4BCwsLDw4PHRERHTAoIigwMDA2MTAxMC4wMjAxMC4yMDIwMDA5MDAuMDAwMDA5MDAwMDAwMDAyMDAwMC4wMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcDBAYBAv/EAEUQAAIBAwADCwgIBQIHAAAAAAABAgMEEQUSIQYTMUFRVIGRkpPSBxUWImFxodEUFyMyUlNVsUJyorLTguFDRWJjc6Pw/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADgRAAIBAgMDCQUIAwEAAAAAAAABAgMRBBIhBTFRExVBUmFxkaGxIlPB0eEUIzJigZKi8CRC8Rb/2gAMAwEAAhEDEQA/ALmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPMgHoPnWR7rIA9B5rIAHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPGyK0tpanQSdRyblnEI8LS4Xwok5rKOe3QaIlcasqcoxnBOLjLKTXvXB/udKSg5pTehxxDqKm3SV3/fgYXurt/wVf6PGfD3YW6/4db+jxkdLcjcctLtS8JiluNufxUu1LwlgqWC63myBGpjeleRM2e623qVIUlCrFzkoKUtXVUnsWcS5dnSTVncNVJU5cTyv5XtXy6CqbmEqVRwfqzpza90ovh60WFaaTo1o0q+/wBKlN01rQcoZzxp5axh56znjcJGkoyp3s/17vEk4WvKd1PedHkZIvztS51Q7dPxHnnejzq37dPxEHJLgyXdErkZIrzvR53b9un4h55oc6t+3T8QyS4PwF0SuRkifPVDndv3lPxDz1R53b9un4hklwfgLolsjJE+eqPO7fvKfiHnqhzu27yn4hklwfgZJbIyRPnqhzu37yn4h56oc7tu8p+IZJcGCWyekR57oc7tu8p+Iee6HO7bvKfiGSXBixLgj6F8prNOpSqr/pkn+zZnpXab1X6suRmoNkAAAAAAAAAAAAAAA1q9nGe1rby8DNkAEa9Dw5ZdqXzPHoxQxOLlmLzwvb7CTPGsgFaeUGy3u4VZfdrw1vZrwSi/hqvrObhSlN4hCU3jOIxlJ45cIsXdxYb5aTaXrUHvq/kS9b+lt/6Th9yukvo93SqN4jKW9T/kn6ueh4fQekwNaUsLeOrjp4aryK2tSSq67maUrCt+RV7up8j4lo+t+RX7up8i6cjJGW2pdTz+hIWFS6fIpGWjq35Ffu6vyMFS1qJqMqdSMpfdi4TUpe5NZfQXrk47yj/Z1LO6Tw6Nyk3x6uY1GuqnLrJOG2vKrUVNxte/S+FzPIKK3levRtf8iv3VXwnj0bX/ACK3dVPCXprDJx5+n1PNnVU7FF+ba/5FfuqnhPPNtf8AIuO6qeEvXIyZ5/qdReLOisih56PqxTlKjWjFLLk6dSMUlwttrCQpWFaS1o0a0ovglGnOUX7mlgtzd3cathX2/fpql0VJKL+DM+5ClqWVvH/sQl0zWs/3JHPU1R5XL/ta1+y/xOqnZXKd81XHN6/dVfCeeabj8iv3VXwl8ZGTj/6Cp1F4s2VdroKEhOrQnlb5SnHjWtSqL9mWRuI3Tu9i6FZpXEI68Ki2b5FcLwuBrKyuPOeXEju/0VTrWdWpOK3yjTlWhP8AiWqsuOeRpYx7uQrPcfcyp39u48dxTg/bGc1B/CTJLlT2nhZTcbTj6248Hw6CQkq1Nu2qLs0dc68cPZJPDXI1sZuERaSxcVI8TUZdLW0lzypAAAAAAAAAAAAAAAAAAANS6ppvDWYzi4tcvs6slMaYs3b16lF/8Obh748MX0xafSXZcRzHZwraveit/KlYatSlcxWyrDe5PknDbHri32C22PWy1snW9Vr8zhXhdXN3Ru7W5lShq2FWvqxUHVhvjjOcUk3sg8PPFnjM/pld/pVx1Vv8RH+SrSeJ1baT2SSrw/mXqzXVqvoZ35ri+SoVnB0l4y6f1NoJuN7nH+mV3+lXHVX/AMREbr9O3N1bOnU0fXoRU41N+aq4hjZtzTSWU2uHjLHNHdDa77a3FLjnb1IrlUnB4fXg0oYulCrGSpJWa1vL5m9jlrLdtdOnDV0bWqrUilUjvzjPCxrJqk1t95n9NLv9Kr9Vf/Ebvk3ut80fTzw051KfuSm3H+mSOkFedGlVlT5FaNrfLj3m5x3pnd/pVx1V/wDEPTK7/Srjs1v8R2B6cvtFD3K/dL5mbrgVnu03S3FxbbzUsqltGVSPrz3zDcduqtaCy9nwJe03WXUIRgtF3GIQjBerW4IpL8v2GTyhvXrWNv8AmXabX/Tr04P4TZ2JKq1qUcPT+6Vnmdry7FxvrbpN3JKK04nH+mV3+l3HZrf4x6Y3f6Xcdmt/jOvPSL9po+5X7p/Mxnj1fUrXdhuwuJ0HbztKlrvuzWm5pygmnJJSivYukifJvo11r2Ev4aP28nxZjsiu00/9LPPKJpT6ReTSeadL7CPGvV+8+1ldCOo3CWP0bR8q2MVbqWrHlUF6sX/dLpRfVZRwmzrxjlc+jV/i7/yk6TVKhorN/H6HU6Je+VqlVcDlqr2qOxP4E0aGh7bUppew3zypWgAAAAAAAAAAAAAAAAAHjOb3ZaM3+0rUkszgt+hy60PWwvetaPSdKa1ysNPl2M3pzdOanHenfwMNXVikdAaR+jXNOuuCFRN+2nJas/6ZP4FselFjzu37aKq3U6N+jXdWljEVNzh/4p+tFe5J6v8ApOz3D6Hsrq0jOdCEqtOTpVHmablHDUnh8cZRfSei2nToVIQxEr20WlunVb/7c0gmtDofSmx53b9uI9KbHnlv3kTH6HWHNodqp4jz0NsObQ7VTxFN/h8Z/wATqc35P9NW9urijUr04QVw5U5SklGpB5jmL49kIv8A1I6r0psud2/eROSs9z9tHS9W0qUlKlKjvlKDcsR2Qex5z+M6f0OsObQ7VTxEvGLCupnln9pJ6Zeldvdr2mzsZvSmy53b95EelNlzuh3kTD6HWHNodqp4h6HWHNodqp4iJbB8Z/xHsdpzmntM29XSlpNV6TpUYuUqmsnCMm5PDfE/Vj1nU+lFlzuh24nJWegbappetbqj9hSoJuGZauu1Tw+HP8b6jqPQ6w5tDrqeIl4pYVKnGTnpFWtl3Nt69uvcdZ5Eknfd2GX0nsud0O3E1NNbsLWnQqTpXFKpVUHqQjJSbm9kdi9rz0GX0OsebR66nzOG8pNpbUKlOhb0owkob5Uacm8SbUY7X7G+o1wmHwtesoRz8dctrLXUzSp05zUVc5rRVlK4uIUYtuVWooa3C9r2yb9iy+guLeIutTt4LFO3gljkeFhdEUus4ryWaOWvUvJ/cowcV/PJZk/eo/3ne7n6TadWX3pycn0vgO23MRylZU1uj6vf5G+NneeXh8SXhHCwfQBSEMAAAAAAAAAAAAAAAAAAGOtDKwZDwArfyraOzGldRXBmhP3bZQfQ9ZdKNHyV6T3u4nQb9WvDWiv+7T2/GLl2Ud3ul0Wri3rW+zM4a0PZUi1KD7UUUzZXc6FWFWHq1KU1OOVwSXE11pr2s9Hs+2KwU6D3rd+uq87myVy+AVV9ZF7yW/dz8Z79ZN7yW/Yn4yFzLiuzx+hsqUmdFul+y0vZVuDfYui37m4Y/wDbHqOxKa0zutuLp0pVFSToVN9g4wccSTi9uZPKzFdRIPylXnJQ7uXjJNbZOInTppWvFNPXtbXRwZ0dCbSsWqCqvrKvOSh3cvGPrLvOS37uXjI3MmL/AC+JlYSqzpdxz19I6QrZz66pdU5R/amjsSmNC7sLi13101TbrVHUm5RcvWeeDElhbWSa8pV5yUO7l4yVi9k4irVzRtayS14JI6VMLUlK67PQtGrUUU5SaUYpybfAktrZR+nNIO5uKlaWcVJtpbfVgniK6IpG/pndfd3cHTnOMYPhhCLgp+yTy217M4NrcJudlc1o1ZrFClLWnJ8E5R2qmunGeRe8k4LC83051q7V7eW+3e9CRQpchFzn/f8Ap2Wi9Hu2sqNrjFSq98q+9+tJdHqx9yOrtKWrFL2ETY/b1pVv4EtSD5Yrj6Xl9ROI8zUnKpJzlvbuVcpOTbZ6ADQwAAAAAAAAAAAAAAAAAAAAAa91HGJcmzoZTe7zRn0e9qRSxCr9vHkxNvWXbUvgXTUWU17DgvKno3fLencJetRnqT/8c9n9yj2mWeyK/J4lJ7pafLzOlP8AEQ+4bcva31Ccqkqyq06mpJRlFLVazGSTi/avfFnQ/VtZ/juO1DwlZ2l7Wo53qpVpa2M6k5w1scGcPbwmfz9ec6uu9rfMva+BxkqjlTrNJ7lroSORm3oyxfq2s/xXHah4R9W1n+K47VPwldef7znN13tb5j0gvOc3Pe1vmc+b9oe/fmdFh63W9Sxfq1s/xV+1T8I+raz/ABV+1T8JXXpBec5ue9rfM9Wn7znNz3tb5jm/aHv35m/2ev1/UsT6trP8VftU/CPq4s/xV+1T8JXq09ec5ue9rfMyR05ec4ue9rfMw8Bj/f8AqbLDYjr+pYltuAsqb1nGrVxtUZTxF9EdXPTsN+drVklSjShQoLZqRlHLXI8bEvYisYaau+cXHe1fmZoaXuvz6/e1fmRa2ysTU1qVb992Hs+tP8U7+JbdpF04qKj+xndw1wxfRhlSU9KXP59fvKvzJTQelLrf6a3yrPNWEXCUpzUoyklLY+RZefYRKmyakIt5lp3mXsiqot5lp3llUaykspmUibepi4lBcGrGTXI3/wDZJYqSpAAAAAAAAAAAAAAAAAAAAABHaRoKUZQnSVanNYlTkouMlxpp7GuAkTwA5aWibVf8st+6oeE9udHaPo01UrWdrSz/AA7zSlJ+xJR2v9joq64EVVut0y61ebz6sZOnFcSjF4+LWeksMHCtiJ5c7st+rOGIrSppZd7JWtp7RUZYejqTX4lRtv2JnR1LRtxSdW2tLWtq8NPeaUKifI1KOx8nE+JlVV62Tf3JaWlbXdKcW9WU405x4p05vVafuzle1FzX2Y+SbpykpLtbv2HbDQrTXtMse3srSosx0bb93Q8Jl81236bb93Q8JI27UK8ocUkqnXlP4p9ZLYPNctV6z8WbZnx9TmPNdt+m2/d0PCHo22X/AC2h3dD5HTaq5DBcNLbxRTl1GeXq9Z+IzPiQGkLawt4KVW1toNrKpqjSnNvk2L48BBPdLoyMsSsIKP4t5t38DndPaZlWqSqSf3nlLkjxR9yRA1quT0OG2beP3spN97IlLEV6svZdkW5QjY1KH0i3tbe4hxqNKnGUccOYyjlNcae0z2ep9+jZ0qcmvvKNOP8Aassrvyc6WlSvY003vdf7KceLL2wljlTWPdJlo6LahUnS4oy2exNKSXxKnaGHnhquRybTV1r0em8sKnKQ9mTevafei7FxbqTeZyeWySPEelecQAAAAAAAAAAAAAAAAAAAAAAADBX2NPoKX3YWU6F3VhJNJzdSD4p05vWTXuy0/amXZVhrLBA6e0RRuIb3c03JR2xqxypwfKmuD3bU+Mn7Pxiw1W8ldPR/MxljJrMUpKRObkNDSr3FNJPCqRnJ8UYRes2+rHvaOqj5PbOMtb6XLVz9171re7P+xO2FCFGO9WcJZl96tLa/fl8L5OBIucXtmlybjRu2+y1izWJpUqbUL3N+jLfLqUlwQSp9Ky38XjoJlGjouwVKOOPl48m+eXK0GrdRzsfBJOJtGOtT1ljq9jAKH01azt6s6NRNShNx/mj/AAzXsa2r3mg3kuXdDoK3uko3MJRnFYjXhlSS5M8DXsaaICh5P7OEtaV25R/D9kpPp2/seqw22aHJrlLqXdck4Tkaf4iD8nehZVLuFTHq0XvjfFiLwl72/wBmWRoqW+ValRfdc8J8qilHPwNG2oRjDeLSm6dN/eqPOtLieG9rftZO6PtFSgooosfjHiqufoWiMYmsqs7pWS0+ptAAhEcAAAAAAAAAAAAAAAAAAAAAAAAHzOCfCfQANaVjTf8ACjJToRjwJIygAAAAAAA+JQT4UYfoNPh1UbIAMdOko8CwZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
                                alt: "cart"
                            })
                        }),
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                            className: "mr-4",
                            children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("span", {
                                className: "text-2xl text-red-600 xsm:text-lg mob:text-sm font-bold",
                                children: `(${cartItems.length})`
                            })
                        })
                    ]
                })
            })
        ]
    });
};
var $2fd16d837f94b7a8$export$2e2bcd8739ae039 = $2fd16d837f94b7a8$var$Header;








const $60635115168f7e9a$export$d68b0da6529801c2 = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3373418&lng=77.9104055&page_type=DESKTOP_WEB_LISTING";
const $60635115168f7e9a$export$cdaa8d75db1a068e = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const $60635115168f7e9a$export$c00227e8e6b5d9e1 = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3373418&lng=77.9104055&restaurantId=";
const $60635115168f7e9a$export$2059083d878c0f83 = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";



const $a7dc583686bea2aa$var$RestaurantCard = ({ info: info  })=>{
    // console.log(info.data.cloudinaryImageId);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.Link), {
        to: `/restaurant/${info.data.id}`,
        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
            className: "border h-65 w-64 cursor-pointer p-4 m-3 border-gray-100 bg-gray rounded-md hover:shadow-2xl bg-gray-50",
            children: [
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                    src: (0, $60635115168f7e9a$export$cdaa8d75db1a068e) + info.data.cloudinaryImageId,
                    alt: "restro"
                }),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h3", {
                    className: "text-sm px-1 font-bold text-black",
                    children: info.data.address.substring(0, 25)
                }),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h4", {
                    className: "text-sm px-1 ",
                    children: info.data.name
                }),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h5", {
                    className: "text-sm px-1",
                    children: [
                        "\uD83D\uDD34",
                        info.data.lastMileTravelString
                    ]
                })
            ]
        })
    });
};
var $a7dc583686bea2aa$export$2e2bcd8739ae039 = $a7dc583686bea2aa$var$RestaurantCard;



const $9e9fd5c092961f24$var$RestaurantList = ({ data: data  })=>{
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactjsxruntime.Fragment), {
        children: data.map((d)=>/*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $a7dc583686bea2aa$export$2e2bcd8739ae039), {
                info: d
            }, d.data.id))
    });
};
var $9e9fd5c092961f24$export$2e2bcd8739ae039 // to={"/watch?v=" + video.id}
 = $9e9fd5c092961f24$var$RestaurantList;



function $abde6129fe720169$export$d6ad891437e8c72c(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}




const $87b9de7cdef1c461$var$Shimmer = ()=>{
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "flex flex-wrap mt-20 justify-center",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "ml-4 mt-2 w-64 h-56 shadow-2xl bg-slate-100"
            })
        ]
    });
};
var $87b9de7cdef1c461$export$2e2bcd8739ae039 = $87b9de7cdef1c461$var$Shimmer;


const $a61de445bb943eda$var$Body = ()=>{
    const [RestroData, setRestroData] = (0, $lsnuL$react.useState)([]);
    const [SearchData, setSearchData] = (0, $lsnuL$react.useState)("");
    const [filteredRestaurants, setFilteredRestaurants] = (0, $lsnuL$react.useState)([]);
    (0, $lsnuL$react.useEffect)(()=>{
        restaurantApiCall();
    }, []);
    (0, $lsnuL$react.useEffect)(()=>{
        const data = (0, $abde6129fe720169$export$d6ad891437e8c72c)(SearchData, RestroData);
        // update the state - restaurants
        setFilteredRestaurants(data);
    }, [
        SearchData
    ]);
    const restaurantApiCall = async ()=>{
        const data = await fetch((0, $60635115168f7e9a$export$d68b0da6529801c2));
        const json = await data.json();
        // console.log(json.data.cards[2].data.data.cards);
        setRestroData(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };
    if (!RestroData) return null;
    return RestroData?.length === 0 ? /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $87b9de7cdef1c461$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "text-center mt-6 h-[80%] w-[100%]",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("input", {
                type: "text",
                placeholder: "Search restaurant",
                className: " h-8 mt-2 w-[400px] p-4 border border-gray-300 rounded-md focus:outline-none xsm:w-[180px] mob:w-[180px]",
                value: SearchData,
                onChange: (e)=>setSearchData(e.target.value)
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("button", {
                className: "h-8 w-20 ml-4 bg-gray-600 text-white rounded-lg hover:bg-green-500 xsm:h-6,w-15 mob:h-6,w-15",
                onClick: ()=>{
                    const data = (0, $abde6129fe720169$export$d6ad891437e8c72c)(SearchData, RestroData);
                    setFilteredRestaurants(data);
                },
                children: "Search"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "flex flex-wrap justify-center border-none mb-6",
                children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $9e9fd5c092961f24$export$2e2bcd8739ae039), {
                    data: filteredRestaurants
                })
            })
        ]
    });
};
var $a61de445bb943eda$export$2e2bcd8739ae039 = $a61de445bb943eda$var$Body;




const $564fbe9b013259fc$var$Footer = ()=>{
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
        className: "flex items-center justify-center bg-[#F97C20] h-10 text-white font-bold fixed bottom-0 left-0 right-0 text-xl",
        children: "Developed by @Prashant Singh"
    });
};
var $564fbe9b013259fc$export$2e2bcd8739ae039 = $564fbe9b013259fc$var$Footer;









const $b4a1d3d41687b51a$var$RestaurantInfo = (menuData)=>{
    const { name: name , areaName: areaName , city: city , avgRatingString: avgRatingString , costForTwoMessage: costForTwoMessage , cloudinaryImageId: cloudinaryImageId  } = menuData;
    // console.log(menuData);
    // console.log(name,areaName,city,avgRatingString,costForTwoMessage);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "flex h-80 w-screen bg-blue-900 justify-center text-center",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                    src: `${(0, $60635115168f7e9a$export$cdaa8d75db1a068e)}${cloudinaryImageId}`,
                    className: "h-60 w-80 mt-9",
                    alt: "restaurantInfo"
                })
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
                className: "px-2 py-20 mt-4 text-white font-bold text-2xl xsm:text-md",
                children: [
                    /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h1", {
                        children: name
                    }),
                    /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h2", {
                        className: "text-xl xsm:text-md",
                        children: [
                            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("span", {
                                children: "\uD83D\uDD34"
                            }),
                            areaName,
                            ",",
                            city
                        ]
                    }),
                    /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h2", {
                        className: "text-xl xsm:text-md",
                        children: [
                            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("span", {
                                children: "⭐"
                            }),
                            avgRatingString
                        ]
                    }),
                    /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h2", {
                        className: "text-xl xsm:text-md",
                        children: [
                            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("span", {
                                children: "\uD83C\uDF5F"
                            }),
                            costForTwoMessage
                        ]
                    })
                ]
            })
        ]
    });
};
var $b4a1d3d41687b51a$export$2e2bcd8739ae039 = $b4a1d3d41687b51a$var$RestaurantInfo;

















const $36560a0ac0324c45$var$cartSlice = (0, $lsnuL$reduxjstoolkit.createSlice)({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        cartItemsSlice: (state, actions)=>{
            state.cartItems.push(actions.payload);
        },
        clearCartItemsSlice: (state)=>{
            state.cartItems = [];
        }
    }
});
const { cartItemsSlice: $36560a0ac0324c45$export$19067f8ac9286220 , clearCartItemsSlice: $36560a0ac0324c45$export$d5f8f41f5aacca9a  } = $36560a0ac0324c45$var$cartSlice.actions;
var $36560a0ac0324c45$export$2e2bcd8739ae039 = $36560a0ac0324c45$var$cartSlice.reducer;


const $c35185816d5a7189$var$MenuCard = (card)=>{
    const { info: info  } = card.card.card;
    const dispatch = (0, $lsnuL$reactredux.useDispatch)();
    // console.log(info?.id);
    // console.log("info", info?.name);
    //    console.log("info", info?.imageId);
    //  console.log("info", info?.price);
    const addItemToCart = ()=>{
        console.log("item to be added");
        dispatch((0, $36560a0ac0324c45$export$19067f8ac9286220)({
            itemId: info.id,
            name: info.name,
            imageId: info.imageId,
            price: info.price
        }));
    };
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
            className: "flex justify-center m2 p-4 items-center shadow-md w-full",
            children: [
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                    children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                        src: !info.imageId ? (0, $60635115168f7e9a$export$2059083d878c0f83) : (0, $60635115168f7e9a$export$cdaa8d75db1a068e) + info.imageId,
                        className: "w-56 "
                    })
                }),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
                    className: "flex flex-col w-10 ml-4",
                    children: [
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h1", {
                            className: "text-sm font-bold",
                            children: [
                                " ",
                                info?.name
                            ]
                        }),
                        /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h1", {
                            className: "mt-2",
                            children: [
                                "₹",
                                info?.price / 100
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                    children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("button", {
                        className: "bg-green-700 h-10 p-2 px-3 mx-10 text-white rounded-md hover:bg-green-400",
                        onClick: addItemToCart,
                        children: "Add"
                    })
                })
            ]
        })
    });
};
var $c35185816d5a7189$export$2e2bcd8739ae039 = $c35185816d5a7189$var$MenuCard;


const $b02989fe76dfc28d$var$MenuItemCards = ({ card: card  })=>{
    // console.log("menu-card", card);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $c35185816d5a7189$export$2e2bcd8739ae039), {
            card: card
        })
    });
};
var $b02989fe76dfc28d$export$2e2bcd8739ae039 = $b02989fe76dfc28d$var$MenuItemCards;


const $24f0d61bca0dc554$var$MenuItem = ({ m: m  })=>{
    const { itemCards: itemCards  } = m;
    // console.log("menu itemcards",itemCards);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
        children: itemCards?.map((card, index)=>/*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $b02989fe76dfc28d$export$2e2bcd8739ae039), {
                card: card
            }, index))
    });
};
var $24f0d61bca0dc554$export$2e2bcd8739ae039 = $24f0d61bca0dc554$var$MenuItem;


const $e055c2788190542c$var$MenuitemList = ({ menulist: menulist  })=>{
    // console.log("menu item list", menulist)
    // console.log("this is a id",inf);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactjsxruntime.Fragment), {
        children: menulist.map((m, index)=>/*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $24f0d61bca0dc554$export$2e2bcd8739ae039), {
                m: m
            }, index))
    });
};
var $e055c2788190542c$export$2e2bcd8739ae039 = $e055c2788190542c$var$MenuitemList;



const $843623b6a73d2fe7$var$RestaurantMenu = ()=>{
    const { id: id  } = (0, $lsnuL$reactrouterdom.useParams)();
    const [restaurantMenuData, setrestaurantMenuData] = (0, $lsnuL$react.useState)(null);
    const menuData = restaurantMenuData;
    (0, $lsnuL$react.useEffect)(()=>{
        callRestaurantMenuApi();
    }, []);
    const callRestaurantMenuApi = async ()=>{
        console.log("menu api call made");
        try {
            const data = await fetch(`${(0, $60635115168f7e9a$export$c00227e8e6b5d9e1)}${id}`);
            const res_data = await data.json();
            const menuItemsList = res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
            const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
            // setrestaurantMenuData(await  json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            const menu = menuItemsList.map((item)=>{
                if (item.card.card["@type"] === itemCategory || item.card.card["@type"] === NestedItemCategory) return item.card.card;
            });
            const modifiedData = {
                info: res_data.data.cards[0].card.card.info,
                menu: menu.filter((value)=>value !== undefined)
            };
            setrestaurantMenuData(modifiedData);
        } catch (error) {
            console.log(error);
        }
    };
    return !menuData ? /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $87b9de7cdef1c461$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "mt-2",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $b4a1d3d41687b51a$export$2e2bcd8739ae039), {
                ...menuData.info
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "w-screen mb-10",
                children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $e055c2788190542c$export$2e2bcd8739ae039), {
                    menulist: menuData.menu
                })
            })
        ]
    });
};
var $843623b6a73d2fe7$export$2e2bcd8739ae039 = $843623b6a73d2fe7$var$RestaurantMenu;





const $e2d3783ea675b535$var$Error = ()=>{
    const err = (0, $lsnuL$reactrouterdom.useRouteError)();
    console.log(err);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h1", {
                children: "Oops!!"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h2", {
                children: "Something went wrong!!"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h2", {
                children: err.status + " :  " + err.statusText
            })
        ]
    });
};
var $e2d3783ea675b535$export$2e2bcd8739ae039 = $e2d3783ea675b535$var$Error;




const $7d0cd18c5f67f3f9$var$store = (0, $lsnuL$reduxjstoolkit.configureStore)({
    reducer: {
        cart: (0, $36560a0ac0324c45$export$2e2bcd8739ae039)
    }
});
var $7d0cd18c5f67f3f9$export$2e2bcd8739ae039 = $7d0cd18c5f67f3f9$var$store;









const $1e2318dd88688319$var$Cart = ({ card: card  })=>{
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "flex flex-col h-64 w-64 mx-2 my-5 font-bold shadow-md",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h1", {
                className: "mb-4 ",
                children: card.name
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                className: "h-40 w-44",
                src: !card.imageId ? (0, $60635115168f7e9a$export$2059083d878c0f83) : (0, $60635115168f7e9a$export$cdaa8d75db1a068e) + card.imageId,
                alt: "cartItemLogo"
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("h1", {
                className: "mt-2",
                children: [
                    "₹",
                    card.price / 100
                ]
            })
        ]
    });
};
var $1e2318dd88688319$export$2e2bcd8739ae039 = $1e2318dd88688319$var$Cart;




const $8d8c46a7544fe630$var$CartList = ()=>{
    // const [Items,setItems]=useState([]);
    const cartItems = (0, $lsnuL$reactredux.useSelector)((store)=>store.cart.cartItems);
    const dispatch = (0, $lsnuL$reactredux.useDispatch)();
    // console.log(cartItems[0]);
    const clearCart = ()=>{
        console.log("cart cleared");
        dispatch((0, $36560a0ac0324c45$export$d5f8f41f5aacca9a)());
    };
    // console.log(Items);
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
        className: "w-[100%] mt-8 ml-4 flex flex-col",
        children: [
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("h1", {
                            className: "font-bold text-4xl mob:text-sm xsm:text-sm ml-4 mr-4",
                            children: `Cart(${cartItems.length})`
                        })
                    }),
                    /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("button", {
                            className: "h-14 w-32 text-xl mob:text-sm xsm:text-sm xsm:w-20 bg-green-700 hover:bg-green-400 text-white rounded-xl",
                            onClick: clearCart,
                            children: "Clear Chart"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                className: "flex mt-6 text-xl mob:text-sm xsm:text-sm items-center flex-wrap mb-10",
                children: cartItems.map((card)=>/*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $1e2318dd88688319$export$2e2bcd8739ae039), {
                        card: card
                    }, card.itemId))
            })
        ]
    });
};
var $8d8c46a7544fe630$export$2e2bcd8739ae039 = $8d8c46a7544fe630$var$CartList;



var $547f99838e732bc7$exports = {};
$547f99838e732bc7$exports = new URL("instamart.89377f70.png", "file:" + __filename).toString();


const $c92758bc95f5195d$var$Instamart = ()=>{
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
        className: "w-[100%] mt-8",
        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
            className: "flex flex-col justify-center items-center",
            children: [
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("span", {
                        className: "text-blue-dark font-bold text-4xl text-center",
                        children: "Coming Soon ....."
                    })
                }),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("div", {
                    children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)("img", {
                        className: "",
                        alt: "instamart",
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($547f99838e732bc7$exports)))
                    })
                })
            ]
        })
    });
};
var $c92758bc95f5195d$export$2e2bcd8739ae039 = $c92758bc95f5195d$var$Instamart;


const $0899c6babadc3080$var$AppLayout = ()=>/*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsxs)("div", {
            className: "font-metrophobic",
            children: [
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $2fd16d837f94b7a8$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.Outlet), {}),
                /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $564fbe9b013259fc$export$2e2bcd8739ae039), {})
            ]
        })
    });
const $0899c6babadc3080$var$router = (0, $lsnuL$reactrouterdom.createBrowserRouter)([
    {
        element: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)($0899c6babadc3080$var$AppLayout, {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $a61de445bb943eda$export$2e2bcd8739ae039), {}),
                errorElement: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $e2d3783ea675b535$export$2e2bcd8739ae039), {})
            },
            {
                path: "/restaurant/:id",
                element: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $843623b6a73d2fe7$export$2e2bcd8739ae039), {}),
                errorElement: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $e2d3783ea675b535$export$2e2bcd8739ae039), {})
            },
            {
                path: "/cart",
                element: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $8d8c46a7544fe630$export$2e2bcd8739ae039), {}),
                errorElement: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $e2d3783ea675b535$export$2e2bcd8739ae039), {})
            },
            {
                path: "/instamart",
                element: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $c92758bc95f5195d$export$2e2bcd8739ae039), {}),
                errorElement: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $e2d3783ea675b535$export$2e2bcd8739ae039), {})
            }
        ]
    }
]);
function $0899c6babadc3080$var$App() {
    return /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactredux.Provider), {
        store: (0, $7d0cd18c5f67f3f9$export$2e2bcd8739ae039),
        children: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $lsnuL$reactrouterdom.RouterProvider), {
            router: $0899c6babadc3080$var$router,
            fallbackElement: /*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $e2d3783ea675b535$export$2e2bcd8739ae039), {})
        })
    });
}
var $0899c6babadc3080$export$2e2bcd8739ae039 = $0899c6babadc3080$var$App;


const $43d7963e56408b24$var$root = (0, ($parcel$interopDefault($lsnuL$reactdomclient))).createRoot(document.getElementById("root"));
$43d7963e56408b24$var$root.render(/*#__PURE__*/ (0, $lsnuL$reactjsxruntime.jsx)((0, $0899c6babadc3080$export$2e2bcd8739ae039), {}));


//# sourceMappingURL=App.js.map
