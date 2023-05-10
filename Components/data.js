const menudata = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "353322",
              name: "SPICE BOX",
              city: "Dehradun",
              slugs: {
                restaurant: "spice-box-prem-nagar-prem-nagar",
                city: "dehradun",
              },
              uniqueId: "fa9767e9-f344-4e41-824e-ed4c2b7be7ba",
              cloudinaryImageId: "qetacrquowfxu795vjaj",
              locality: "Chakrata Road",
              areaName: "Prem Nagar",
              costForTwo: "40000",
              costForTwoMessage: "₹400 for two",
              cuisines: ["Biryani", "Pizzas"],
              avgRating: 3.8,
              feeDetails: {
                restaurantId: "353322",
                fees: [
                  { name: "distance", fee: 1900 },
                  { name: "time" },
                  { name: "special" },
                ],
                totalFee: 1900,
                title: "Delivery Charge",
                amount: "1900",
              },
              parentId: "3651",
              avgRatingString: "3.8",
              totalRatingsString: "100+ ratings",
              sla: {
                restaurantId: "353322",
                deliveryTime: 33,
                minDeliveryTime: 33,
                maxDeliveryTime: 33,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                stressFactor: 0.913483,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 1056,
                slaString: "33 MINS",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-05-09 23:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  { discountType: "Percentage", operationType: "RESTAURANT" },
                ],
                descriptionList: [
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "20% off up to ₹120 | Use FEDERALCC Above ₹249",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "spice-box-prem-nagar-prem-nagar",
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "M/S- SPICE BOX CAFE, NEAR BFIT GROUP OF COLLEGE, MANDUWALA ROAD, SUDHOWALA, PREMNAGAR,DEHRADUN,Prithvipur, Vikasnagar,Dehradun,Uttarakhand-248001",
                },
                { title: "Cuisines", message: "Biryani,Pizzas" },
              ],
              totalRatings: 100,
              aggregatedDiscountInfoV2: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  { discountType: "Percentage", operationType: "RESTAURANT" },
                ],
                descriptionList: [
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "20% off up to ₹120 | Use FEDERALCC Above ₹249",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/353322",
              },
              expectationNotifiers: [
                {
                  icon: {},
                  popup: { cta: {} },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  halfCardPopup: { halfCardPopupHeader: {} },
                },
              ],
              ratingSlab: "RATING_SLAB_4",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              areaPostalCode: "0",
              latLong: "30.344352,77.925804",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "50% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      offerIds: ["8f7c8342-e2b7-46e7-becb-60fb40196d55"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹149",
                      offerType: "offers",
                      restId: "353322",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹120",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      offerIds: ["e6623173-c965-477d-a778-5325e09701d6"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FEDERALCC",
                      description: "ABOVE ₹249",
                      offerType: "offers",
                      restId: "353322",
                      offerLogo:
                        "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/6ef0fc65ca643ecbdcf8a930599c7edd",
                      offerIds: ["ed4cf4d7-2df2-490a-9627-82f4256c3c86"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "353322",
                      offerLogo:
                        "rng/md/ads/production/6ef0fc65ca643ecbdcf8a930599c7edd",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                      offerIds: ["104de841-cb23-47e3-8e8a-a5f8e4ee8d7f"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AUCC100",
                      description: "ABOVE ₹399",
                      offerType: "offers",
                      restId: "353322",
                      offerLogo:
                        "rng/md/ads/production/3a937ddacd3adb70c4543c4895213123",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88250359",
                              name: "Paneer Tikka Biryani",
                              category: "Biryani Wala",
                              description:
                                "Cottage cheese cooked in tandoor and mixed with dum biryani rice, tempered with fried onion and fresh green mint.",
                              imageId: "813781726c627db983358271ce72adcb",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793928",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 14000,
                                        default: 1,
                                        id: "62576351",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 34000,
                                        id: "62576352",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451145",
                              name: "Egg Dum Biryani ",
                              category: "Biryani Wala",
                              description: "Aromatic egg biryani  +raita",
                              imageId: "2de844ceed2e915eb7fe03fe7765f8c0",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793929",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576353",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576354",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451150",
                              name: "Chicken Dum Biryani ",
                              category: "Biryani Wala",
                              description:
                                "Chicken cooked in spices blend in herbs.  with+raita",
                              imageId: "cc5cc001088bc1767883d97633811655",
                              inStock: 1,
                              price: 30000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793932",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576359",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576360",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87747636",
                              name: "Chole",
                              category: "Cholay Wala",
                              imageId: "0c60b2051d4d1054a3cd70b49e9c4c1c",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012119",
                              name: "Chole Kulche",
                              category: "Cholay Wala",
                              description:
                                "A classic Punjabi combo of kulcha and delicious chickpea gravy.",
                              imageId: "e348d312cd4c4cea44fed3b1affeef41",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451224",
                              name: "Chole Bhature",
                              category: "Cholay Wala",
                              description:
                                "Chole bhature is a food dish originating from northern India. it is a combination of chana masala and bhatura, a fried bread made from maida.",
                              imageId: "1ccdd1c458ad8dab2aa2460dc768f9d1",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451230",
                              name: "Pao Bhaji",
                              category: "Cholay Wala",
                              imageId: "303f6d7a640b3ac7c66e6993997fd2d7",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012158",
                              name: "Malai Soya Chaap",
                              category: "Kebab Junction",
                              imageId: "3bbd3bd083ef0071111d7e581377fd17",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793969",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576433",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 17000,
                                        id: "62576434",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012134",
                              name: "Fish Masala",
                              category: "Non Veg Curry",
                              description:
                                "A mouthwatering dish prepared with delectable fish stir fried with assorted vegetables and spicy sauces - perfect to satisfy your hunger.",
                              imageId: "03715e04f9827a8f8b7024a6568be487",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793964",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576423",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576424",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451199",
                              name: "Butter Chicken ",
                              category: "Non Veg Curry",
                              imageId: "3d3630b2613ce112574f3d2fdb176b08",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793954",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576403",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576404",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451205",
                              name: "Changezi Chicken",
                              category: "Non Veg Curry",
                              description:
                                "A Mughlai delicacy prepared with marinated chicken fried and simmered in a rich ghee, tomato puree, milk, cream, spice powder, onion, cashew paste and more.",
                              imageId: "93f376527c0ff9b58d024262035226ef",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793956",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576407",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576408",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012159",
                              name: "Tandoori Roti",
                              category: "Tawa junction",
                              imageId: "e301605c2575533fcd8e0d16c1cbdbe7",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012163",
                              name: "Plain Naan",
                              category: "Tawa junction",
                              imageId: "8c4fc25701ccba749a84dd5d6491346a",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012165",
                              name: "Butter Naan",
                              category: "Tawa junction",
                              imageId: "5ddf897da43a3390d06d992ee2714bbc",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012167",
                              name: "Garlic Naan",
                              category: "Tawa junction",
                              imageId: "041157860d6f187685422b6606138a5f",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451201",
                              name: "Spring Roll Veg",
                              category: "Chinese Express",
                              description:
                                "All time favorite mouthwatering Deep-fried, stuffed rolls packed with seasoned assorted veggies.",
                              imageId: "2e7de44a3bf45d20d5430abbd59ed199",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451236",
                              name: "Chilli Paneer Dry",
                              category: "Chinese Starters Veg",
                              description:
                                "A delightfully flavorful dish prepared with soft paneer and slow cooked with flavorful chilli sauce and other masalas.",
                              imageId: "eb8ae64ebf77f121a3929023c2f248dc",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012125",
                              name: "Veg Fried Rice",
                              category: "Noodles & Rice",
                              description:
                                "A deliciously aromatic and flavorful dish made from stir fried mixed vegetables and rice.",
                              imageId: "7179fe6fe3dc66c0a7ff5c570a5285be",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012129",
                              name: "Chicken Fried Rice",
                              category: "Noodles & Rice",
                              description:
                                "Deliciously decadent flavored dum rice layered with fried chicken and indian whole spices dum coked to perfection.",
                              imageId: "kznktgghf5mpheaovdyn",
                              inStock: 1,
                              price: 20500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451274",
                              name: "Chowmin Veg",
                              category: "Noodles & Rice",
                              imageId: "edf110ee8d1c70abe203a6b9e538845f",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451251",
                              name: "Chilli Paneer Gravy",
                              category: "Veg Main Course",
                              description:
                                "Chilli paneer is an indian-chinese style main course dish of cottage cheese and veggies in a tingling, sweet, spicy, and salty sauce.",
                              imageId: "49edc8b6d02619165b92457bfdf80f8f",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Biryani Wala",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88250359",
                              name: "Paneer Tikka Biryani",
                              category: "Biryani Wala",
                              description:
                                "Cottage cheese cooked in tandoor and mixed with dum biryani rice, tempered with fried onion and fresh green mint.",
                              imageId: "813781726c627db983358271ce72adcb",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793928",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        price: 14000,
                                        default: 1,
                                        id: "62576351",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 34000,
                                        id: "62576352",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88250535",
                              name: "Tandoori Chicken Biryani",
                              category: "Biryani Wala",
                              description:
                                "Tandoori chicken served on dum rice and cooked  with unique blend of herbs and spice served with   +raita",
                              imageId: "i0nlxnhyjcdiu7ujbujw",
                              inStock: 1,
                              price: 32000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793935",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576365",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 12000,
                                        id: "62576366",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451145",
                              name: "Egg Dum Biryani ",
                              category: "Biryani Wala",
                              description: "Aromatic egg biryani  +raita",
                              imageId: "2de844ceed2e915eb7fe03fe7765f8c0",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793929",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576353",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576354",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451150",
                              name: "Chicken Dum Biryani ",
                              category: "Biryani Wala",
                              description:
                                "Chicken cooked in spices blend in herbs.  with+raita",
                              imageId: "cc5cc001088bc1767883d97633811655",
                              inStock: 1,
                              price: 30000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793932",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576359",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576360",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451153",
                              name: "Fish Tikka Biryani",
                              category: "Biryani Wala",
                              description:
                                "Flavourful layers of rice and succulent pieces of roasted fish tikka with spiced gravy.",
                              inStock: 1,
                              price: 24000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793934",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576362",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 23500,
                                        id: "62576364",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451155",
                              name: "Fish Tikka Biryani ",
                              category: "Biryani Wala",
                              description:
                                "tandoori fish tikka cooked with aromatic rice delicious all the way",
                              inStock: 1,
                              price: 17500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793936",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576367",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 17500,
                                        id: "62576368",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Cholay Wala",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87747636",
                              name: "Chole",
                              category: "Cholay Wala",
                              imageId: "0c60b2051d4d1054a3cd70b49e9c4c1c",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87747638",
                              name: "Bhaji",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87747311",
                              name: "Kulcha Bhaji",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "87747254",
                              name: "Poori Bhaji",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012119",
                              name: "Chole Kulche",
                              category: "Cholay Wala",
                              description:
                                "A classic Punjabi combo of kulcha and delicious chickpea gravy.",
                              imageId: "e348d312cd4c4cea44fed3b1affeef41",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451209",
                              name: "Bhatura 2 Pcs",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451212",
                              name: "Kulcha 2 Pcs",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451215",
                              name: "Pao 2 Pcs",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451217",
                              name: "Poori 2 Pcs",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451224",
                              name: "Chole Bhature",
                              category: "Cholay Wala",
                              description:
                                "Chole bhature is a food dish originating from northern India. it is a combination of chana masala and bhatura, a fried bread made from maida.",
                              imageId: "1ccdd1c458ad8dab2aa2460dc768f9d1",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451228",
                              name: "Chole Pao",
                              category: "Cholay Wala",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451230",
                              name: "Pao Bhaji",
                              category: "Cholay Wala",
                              imageId: "303f6d7a640b3ac7c66e6993997fd2d7",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Kebab Junction",
                      categories: [
                        {
                          title: "Starters veg.",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451255",
                                  name: "Pahadi Paneer Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "grilled cottages cheese marinated in fresh mint and coriender",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793965",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576425",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576426",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Starters veg. ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66012156",
                                  name: "Kakay Di Soya Chaap",
                                  category: "Kebab Junction",
                                  description:
                                    "tandoori soya chaap with red marination",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793968",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576431",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 17000,
                                            id: "62576432",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "66012158",
                                  name: "Malai Soya Chaap",
                                  category: "Kebab Junction",
                                  imageId: "3bbd3bd083ef0071111d7e581377fd17",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793969",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576433",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 17000,
                                            id: "62576434",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451256",
                                  name: "Punjabi Paneer Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "grilled cottages cheese marninarinated in tandoori red marinatio",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793966",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576427",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576428",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451257",
                                  name: "Kali Mirch  Paneer Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "grilled cottages chees  marinated in tandoori yellow marinated",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 20000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793967",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576429",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576430",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Starters Non- Veg.",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451258",
                                  name: "Kali Mirch Chicken Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "chicken tikka marination cooked in tandoorb",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793970",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576435",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576436",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Starters Non- Veg. ",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451143",
                                  name: "Haryali Fish Tikka",
                                  category: "Kebab Junction",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793927",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576349",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576350",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451146",
                                  name: "Malai Fish Tikka",
                                  category: "Kebab Junction",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793930",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576355",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576356",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451151",
                                  name: "Punjabi Thalli Macchi",
                                  category: "Kebab Junction",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793933",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576361",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576363",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451259",
                                  name: "Punjabi Chicken Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "of all things fiery and hot chicken and chilles all the way",
                                  inStock: 1,
                                  price: 20000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793971",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576437",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 14000,
                                            id: "62576438",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451260",
                                  name: "Murgh Malai Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "mild favoured chicken tikka with cheese and butter",
                                  inStock: 1,
                                  price: 20000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793972",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576439",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 14000,
                                            id: "62576440",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451261",
                                  name: "Tandoori Murgh ",
                                  category: "Kebab Junction",
                                  description:
                                    "absolute classic and delightful",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793973",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576441",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 27000,
                                            id: "62576442",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451262",
                                  name: "Pahadi Chicken Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "chicken in green marination cooked in tandoor",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793974",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576443",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576444",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451264",
                                  name: "Chicken 65 ",
                                  category: "Kebab Junction",
                                  description:
                                    "spicy deep fried chicken tampered with south Indian Tadka",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793975",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576445",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576446",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451265",
                                  name: "Chicken Seekh Kabab",
                                  category: "Kebab Junction",
                                  description:
                                    "Minced chicken marinated in a seasoned masala and cooked on skewers to perfection in a tandoor.",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793976",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576447",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576448",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451267",
                                  name: "Mutton Seekh Kabab ",
                                  category: "Kebab Junction",
                                  description:
                                    "tandoori cooked lamb mince skewers",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793977",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576449",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576450",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "99451269",
                                  name: "Fish Tikka ",
                                  category: "Kebab Junction",
                                  description:
                                    "boneless fish marinated with spiced red marination cooked to perfection.",
                                  inStock: 1,
                                  price: 25000,
                                  variants: {
                                    variantGroups: [
                                      {
                                        groupId: "18793978",
                                        name: "Quantity",
                                        variations: [
                                          {
                                            name: "Half",
                                            default: 1,
                                            id: "62576451",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Full",
                                            price: 20000,
                                            id: "62576452",
                                            inStock: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Curry",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012197",
                              name: "Paneer Makhani",
                              category: "Veg Curry",
                              description:
                                "Golden fried paneer cubes cooked with sweet tomato, butter, cream and cashew nut sauce topped with coriander.",
                              imageId: "khk6jp1jzw9xsxxfhykq",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793943",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576381",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576382",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012200",
                              name: "Paneer Lababdar",
                              category: "Veg Curry",
                              description:
                                "Paneer lababdar is a curry of fresh paneer in a spiced tomato, butter and cream sauce,tastes best with naan or laccha paratha.",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793944",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576383",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576384",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451158",
                              name: "Soya Lababdar",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793937",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576369",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576370",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451160",
                              name: "Soya Makhani",
                              category: "Veg Curry",
                              imageId: "p1f1fqnukv4zbajj3ay7",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793938",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576371",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576372",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451162",
                              name: "Kadai Soya Chaap ",
                              category: "Veg Curry",
                              imageId: "yk9cppej7oh6mat4gxyu",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793939",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576373",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576374",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451164",
                              name: "Soya Masala",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793940",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576375",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576376",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451166",
                              name: "Paneer Butter Masala ",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793941",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576377",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576378",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451169",
                              name: "Kadai Paneer ",
                              category: "Veg Curry",
                              imageId: "hlbbld4s48z6wkyjfba1",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793942",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576379",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576380",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451176",
                              name: "Makhmali Kofta",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793945",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576385",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576386",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451179",
                              name: "Mix Veg",
                              category: "Veg Curry",
                              description:
                                "A wholesome dish prepared by cooking chopped vegetables in a flavorful Indian masala.",
                              imageId: "wdglnrdzccxsgm96ks9h",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793946",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576387",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576388",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451182",
                              name: "Dhaba Tadka Dal",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793947",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576389",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576390",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451183",
                              name: "Chana Masala ",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793948",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576391",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576392",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451186",
                              name: "Pindi Chole",
                              category: "Veg Curry",
                              description:
                                "It is made using everyday Indian spices. Raw chickpeas are soaked overnight and then cooked in a onion-tomato based masala. Vegan and gluten-free.",
                              imageId: "uccasfiud2pizzy0zx40",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793949",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576393",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576394",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451189",
                              name: "Dal Makhani ",
                              category: "Veg Curry",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793950",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576395",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576396",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Non Veg Curry",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88249846",
                              name: "Egg Masala",
                              category: "Non Veg Curry",
                              description:
                                "A deliciously Non spicy preparation with juicy mixed egg chunks tossed in fiery sauce.",
                              inStock: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793952",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576399",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576400",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68490911",
                              name: "Mutton Seekh Masala",
                              category: "Non Veg Curry",
                              description:
                                "Mutton cooked with desi spices and seasoned to perfection into seekh.",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793960",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576415",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576416",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012134",
                              name: "Fish Masala",
                              category: "Non Veg Curry",
                              description:
                                "A mouthwatering dish prepared with delectable fish stir fried with assorted vegetables and spicy sauces - perfect to satisfy your hunger.",
                              imageId: "03715e04f9827a8f8b7024a6568be487",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793964",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576423",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576424",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012137",
                              name: "Pahadi Fish Curry",
                              category: "Non Veg Curry",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793963",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576421",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576422",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451192",
                              name: "Egg Curry ",
                              category: "Non Veg Curry",
                              inStock: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793951",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576397",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576398",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451197",
                              name: "Egg Bhurji",
                              category: "Non Veg Curry",
                              description:
                                "A classic Indian breakfast, egg Bhurji is a spicy, mouth-watering spin on scrambled eggs.",
                              inStock: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793953",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576401",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "62576402",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451199",
                              name: "Butter Chicken ",
                              category: "Non Veg Curry",
                              imageId: "3d3630b2613ce112574f3d2fdb176b08",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793954",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576403",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576404",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451202",
                              name: "Kadai Chicken",
                              category: "Non Veg Curry",
                              description:
                                "A spicy, warming, flavorful and super delicious dish made by cooking chicken pieces & bell peppers in a fragrant, fresh ground spice powder.",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793955",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576405",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576406",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451205",
                              name: "Changezi Chicken",
                              category: "Non Veg Curry",
                              description:
                                "A Mughlai delicacy prepared with marinated chicken fried and simmered in a rich ghee, tomato puree, milk, cream, spice powder, onion, cashew paste and more.",
                              imageId: "93f376527c0ff9b58d024262035226ef",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793956",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576407",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576408",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451208",
                              name: "Home Style Chicken Curry",
                              category: "Non Veg Curry",
                              description:
                                "Flavorful home style chicken dish in a thick curry, spiced up with cardamom, yogurt and whole red chillies.",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793957",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576409",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576410",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451211",
                              name: "Adraki Chicken ",
                              category: "Non Veg Curry",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793958",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576411",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576412",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451214",
                              name: "Masala Chicken ",
                              category: "Non Veg Curry",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793959",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576413",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 26000,
                                        id: "62576414",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451219",
                              name: "Bhunna Mutton Seekh  ",
                              category: "Non Veg Curry",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793961",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576417",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576418",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451221",
                              name: "Mutton Keema Matter",
                              category: "Non Veg Curry",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "18793962",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "62576419",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14000,
                                        id: "62576420",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Tawa junction",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012159",
                              name: "Tandoori Roti",
                              category: "Tawa junction",
                              imageId: "e301605c2575533fcd8e0d16c1cbdbe7",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012163",
                              name: "Plain Naan",
                              category: "Tawa junction",
                              imageId: "8c4fc25701ccba749a84dd5d6491346a",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012165",
                              name: "Butter Naan",
                              category: "Tawa junction",
                              imageId: "5ddf897da43a3390d06d992ee2714bbc",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012167",
                              name: "Garlic Naan",
                              category: "Tawa junction",
                              imageId: "041157860d6f187685422b6606138a5f",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451168",
                              name: "Tawa Laccha Paratha",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451171",
                              name: "Tandoori Laccha Paratha",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451173",
                              name: "Aloo Kulcha Tandoor",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451175",
                              name: "Tawa Aloo Kulcha",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451178",
                              name: "Paneer Kulcha Tandoor",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451181",
                              name: "Tawa Paneer Kulcha",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 6500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451185",
                              name: "Cheese Kulcha Tandoor",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451187",
                              name: "Aloo Paratha",
                              category: "Tawa junction",
                              description:
                                "A popular Indian dish of unleavened whole wheat savory and spiced potato stuffed flatbread.",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451190",
                              name: "Mix Paratha",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451193",
                              name: "Paneer Paratha",
                              category: "Tawa junction",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451195",
                              name: "Cheese Paratha",
                              category: "Tawa junction",
                              description:
                                "Wholesome cheese paratha stuffed with a generous helping of cheese",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451200",
                              name: "Egg Paratha",
                              category: "Tawa junction",
                              description:
                                "A deliciously soft parathas stuffed with single scrambled egg and spices.",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451203",
                              name: "Chicken Keema Paratha",
                              category: "Tawa junction",
                              inStock: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451206",
                              name: "Mutton Keema Paratha",
                              category: "Tawa junction",
                              description:
                                "Paratha made of maida filled with mutton keema cooked in tandoor with butter on top.",
                              inStock: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese Express",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451201",
                              name: "Spring Roll Veg",
                              category: "Chinese Express",
                              description:
                                "All time favorite mouthwatering Deep-fried, stuffed rolls packed with seasoned assorted veggies.",
                              imageId: "2e7de44a3bf45d20d5430abbd59ed199",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451204",
                              name: "Spring Roll  Non-Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451207",
                              name: "Fried Momos Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451210",
                              name: "Fried Momos Non- Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451213",
                              name: "Tandoori Momo Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451216",
                              name: "Tandoori Momo Non-Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              price: 20500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451218",
                              name: "Steamed Momos Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451220",
                              name: "Steamed Momos Non- Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              price: 17500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451222",
                              name: "Lasagna Momos Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451223",
                              name: "Lasagna Momos Non- Veg",
                              category: "Chinese Express",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese Starters Veg",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012065",
                              name: "Honey Chilli Potato",
                              category: "Chinese Starters Veg",
                              description:
                                "Simple, sticky sweet, kinda spicy sauce hugging crispy and potatoes.",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451234",
                              name: "Chilli Soya Dry",
                              category: "Chinese Starters Veg",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451236",
                              name: "Chilli Paneer Dry",
                              category: "Chinese Starters Veg",
                              description:
                                "A delightfully flavorful dish prepared with soft paneer and slow cooked with flavorful chilli sauce and other masalas.",
                              imageId: "eb8ae64ebf77f121a3929023c2f248dc",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451238",
                              name: "Manchurian Veg",
                              category: "Chinese Starters Veg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Starters Non- Veg",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012076",
                              name: "Fish Hot Garlic",
                              category: "Starters Non- Veg",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451240",
                              name: "Egg Manchurian",
                              category: "Starters Non- Veg",
                              description:
                                "Fried boiled eggs and crispy vegies florets tossed in a thick and spicy Manchurian gravy.",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451243",
                              name: "Chilli Fish.",
                              category: "Starters Non- Veg",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451245",
                              name: "Chilli Chicken .",
                              category: "Starters Non- Veg",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012083",
                              name: "Chicken Manchurian",
                              category: "Starters Non- Veg",
                              description:
                                "A flavor-packed dish with succulent chicken chunks coated in seasoned batter, deep fried and tossed in manchurian sauce.",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Non-Veg Main Course",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012078",
                              name: "Chilli Chicken",
                              category: "Non-Veg Main Course",
                              description:
                                "A popular Indo-Chinese dish where cubes of fried crispy chicken are tossed in a spicy sauce made with soy sauce, vinegar, chili sauce.",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451266",
                              name: "Fish In Hot Garlic Sauce",
                              category: "Non-Veg Main Course",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451268",
                              name: "Chilli Fish",
                              category: "Non-Veg Main Course",
                              description:
                                "A mouthwatering dish prepared with boneless fish fried to golden brown and stir fried with assorted vegetables and spicy sauces.",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451270",
                              name: "Chicken In Hot Garlic Sauce",
                              category: "Non-Veg Main Course",
                              description:
                                "Tender chicken pieces in a rustic gravy having strong garlicky flavors.",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Noodles & Rice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012125",
                              name: "Veg Fried Rice",
                              category: "Noodles & Rice",
                              description:
                                "A deliciously aromatic and flavorful dish made from stir fried mixed vegetables and rice.",
                              imageId: "7179fe6fe3dc66c0a7ff5c570a5285be",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012127",
                              name: "Egg Fried Rice",
                              category: "Noodles & Rice",
                              inStock: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012129",
                              name: "Chicken Fried Rice",
                              category: "Noodles & Rice",
                              description:
                                "Deliciously decadent flavored dum rice layered with fried chicken and indian whole spices dum coked to perfection.",
                              imageId: "kznktgghf5mpheaovdyn",
                              inStock: 1,
                              price: 20500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451271",
                              name: "Maggi Veg",
                              category: "Noodles & Rice",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451272",
                              name: "Maggi Egg",
                              category: "Noodles & Rice",
                              inStock: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451273",
                              name: "Maggi Chicken",
                              category: "Noodles & Rice",
                              inStock: 1,
                              price: 13500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451274",
                              name: "Chowmin Veg",
                              category: "Noodles & Rice",
                              imageId: "edf110ee8d1c70abe203a6b9e538845f",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451275",
                              name: "Chowmin Egg",
                              category: "Noodles & Rice",
                              inStock: 1,
                              price: 13500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451276",
                              name: "Chowmin Chicken",
                              category: "Noodles & Rice",
                              inStock: 1,
                              price: 20500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451277",
                              name: "Hakka Noodles Veg",
                              category: "Noodles & Rice",
                              description:
                                "Soft noodles tossed with fresh , assorted vegetables in a simple and tasty dressing .",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451278",
                              name: "Hakka Noodles Egg",
                              category: "Noodles & Rice",
                              inStock: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "EGG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451279",
                              name: "Hakka Noodles Chicken",
                              category: "Noodles & Rice",
                              description:
                                "A vibrant and wholesome dish with noodles and juicy chicken chunks tossed in a tangy soy and chinese based dressing.",
                              inStock: 1,
                              price: 20500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Pizza Hunt",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451172",
                              name: "Margherita Pizza 7 ''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451174",
                              name: "Onion Capsicum Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451177",
                              name: "Cheese & Corn Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451180",
                              name: "Capsicum & Onion Paneer Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451184",
                              name: "Makhani Paneer Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451188",
                              name: "Butter Chicken Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451191",
                              name: "Chicken Tikka Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451194",
                              name: "Capsicum & Onion Chicken Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451196",
                              name: "Chicken Seekh Kebab Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451198",
                              name: "Mutton Seekh Kebab Pizza 7''",
                              category: "Pizza Hunt",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Burger Planet",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66012082",
                              name: "Veg Burger",
                              category: "Burger Planet",
                              description:
                                "A delightfully juicy burger with a crunchy patty spread on a bed of tomatoes and onions.",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451233",
                              name: "Aloo Tikki Burger",
                              category: "Burger Planet",
                              description:
                                "A simple aloo tikka in a bun to satisfy your hunger needs.",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451235",
                              name: "Paneer Burger",
                              category: "Burger Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451237",
                              name: "Butter Chicken Burger",
                              category: "Burger Planet",
                              description:
                                "A flavor-packed burger with a chicken prepared with succulent chicken and veggies in flavorful masalas.",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451239",
                              name: "Tandoori Chicken Tikka Burger",
                              category: "Burger Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451241",
                              name: "Chicken Seekh Burger",
                              category: "Burger Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451242",
                              name: "Mutton Seekh Burger",
                              category: "Burger Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Sandwich Planet",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451244",
                              name: "Veg Sandwich Normal",
                              category: "Sandwich Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451246",
                              name: "Veg Sandwich Grilled",
                              category: "Sandwich Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451247",
                              name: "Paneer Sandwich Normal",
                              category: "Sandwich Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451248",
                              name: "Paneer Sandwich Grilled",
                              category: "Sandwich Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451250",
                              name: "Chicken Sandwich Normal",
                              category: "Sandwich Planet",
                              inStock: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451252",
                              name: "Chicken Sandwich Grilled",
                              category: "Sandwich Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451253",
                              name: "Chicken Tikka Sandwich Normal",
                              category: "Sandwich Planet",
                              inStock: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451254",
                              name: "Chicken Tikka Sandwich Grilled",
                              category: "Sandwich Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Pasta Planet",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451142",
                              name: "White Sauce Fusili Pasta Veg",
                              category: "Pasta Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451144",
                              name: "Red Sauce Fuisili Pasta Veg",
                              category: "Pasta Planet",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451147",
                              name: "Chicken Tikka White Sauce Fusili ",
                              category: "Pasta Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451149",
                              name: "Chicken Tikka  Red Sauce Fusili ",
                              category: "Pasta Planet",
                              inStock: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Soups",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451225",
                              name: "Hot & Sour Veg",
                              category: "Veg Soups",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451226",
                              name: "Hot & Sour Chicken",
                              category: "Veg Soups",
                              description:
                                "Chicken chunks tossed in spicy and sour sauce to tingle the taste buds.",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451227",
                              name: "Manchow Veg",
                              category: "Veg Soups",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451229",
                              name: "Manchow  Chicken",
                              category: "Veg Soups",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451231",
                              name: "Sweet Corn Veg",
                              category: "Veg Soups",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451232",
                              name: "Sweet Corn Chicken",
                              category: "Veg Soups",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Main Course",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451249",
                              name: "Manchurian Veg Gravy",
                              category: "Veg Main Course",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451251",
                              name: "Chilli Paneer Gravy",
                              category: "Veg Main Course",
                              description:
                                "Chilli paneer is an indian-chinese style main course dish of cottage cheese and veggies in a tingling, sweet, spicy, and salty sauce.",
                              imageId: "49edc8b6d02619165b92457bfdf80f8f",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451263",
                              name: "Mix Veg In Hot Garlic Sauce",
                              category: "Veg Main Course",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Dessert Safari",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451281",
                              name: "Gulab Jamun 2 Pcs",
                              category: "Dessert Safari",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99451280",
                              name: "Choice Of Ice Cream",
                              category: "Dessert Safari",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 22622029000536"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "SPICE BOX",
                      area: "Prem Nagar",
                      completeAddress:
                        "M/S- SPICE BOX CAFE, NEAR BFIT GROUP OF COLLEGE, MANDUWALA ROAD, SUDHOWALA, PREMNAGAR,DEHRADUN,Prithvipur, Vikasnagar,Dehradun,Uttarakhand-248001",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
  },
  tid: "032205d5-2c1d-4755-85e2-f3706ef75598",
  sid: "6ycd0277-37c9-4c6b-84f8-0419d82e3218",
  deviceId: "033cdfe1-a533-171e-1160-54612cd32113",
  csrfToken: "Lzugk4LPNWs4-ZSQiK4Vtqplih7QWxJobwLyaWpQ",
};
