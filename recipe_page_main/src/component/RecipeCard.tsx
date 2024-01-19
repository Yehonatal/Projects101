import omeletteImg from "../assets/images/image-omelette.jpeg";

function RecipeCard() {
    return (
        <main className="text-left text-[#242424] max-w-[650px] m-auto md:p-4 lg:p-8  rounded-2xl bg-white">
            {/* Picture */}
            <div className="food_picture ">
                <img
                    className="rounded-xl"
                    src={omeletteImg}
                    alt="image of the food in the recipe"
                />
            </div>

            {/* Description */}
            <div className="main-description mt-4">
                <h1 className="font-extrabold text-2xl ">
                    Simple Omelette Recipe
                </h1>
                <p className="text-left text-sm my-4">
                    An easy and quick dish, perfect for any meal. This classic
                    omelette combines beaten eggs cooked to perfection,
                    optionally filled with your choice of cheese, vegetables, or
                    meats.
                </p>
            </div>

            {/* Preparation Time */}
            <div className="prep_time border text-[#242424] p-6 border-pink-100 bg-pink-100 rounded-md">
                <h1 className="font-extrabold text-[#854632]">
                    Preparation time
                </h1>
                <ul className="text-left mt-2 list-disc text-sm  ml-10">
                    <li>
                        <span className="text-extrabold">Total:</span>
                        Approximately 10 minutes
                    </li>
                    <li>
                        <span className="text-extrabold">Preparation:</span> 5
                        minutes
                    </li>
                    <li>
                        <span className="text-extrabold">Cooking:</span> 5
                        minutes
                    </li>{" "}
                </ul>
            </div>

            {/* Ingredients */}
            <div className="ingredients text-[#242424] py-6 border-b-2 ">
                <h1 className="font-extrabold text-[#854632] text-xl">
                    Ingredients
                </h1>
                <ul className="text-left ml-8 list-disc text-sm mt-4">
                    <li>2-3 large eggs</li>
                    <li>Salt, to taste</li>
                    <li>Pepper, to taste</li>
                    <li>1 tablespoon of butter or oil</li>
                    <li>
                        Optional fillings: cheese, diced vegetables, cooked
                        meats, herbs
                    </li>
                </ul>
            </div>

            {/* Instructions */}
            <div className="instructions text-[#242424] py-6 border-b-2 ">
                <h1 className="font-extrabold text-[#854632] text-xl">
                    Instructions
                </h1>
                <ul className="text-left ml-8 list-decimal text-sm mt-4">
                    <li>
                        <span className="text-extrabold">Beat the eggs:</span>
                        In a bowl, beat the eggs with a pinch of salt and pepper
                        until they are well mixed. You can add a tablespoon of
                        water or milk for a fluffier texture.
                    </li>
                    <li>
                        <span className="text-extrabold">Heat the pan:</span>
                        Place a non-stick frying pan over medium heat and add
                        butter or oil.
                    </li>
                    <li>
                        <span className="text-extrabold">
                            Cook the omelette:
                        </span>
                        Once the butter is melted and bubbling, pour in the
                        eggs. Tilt the pan to ensure the eggs evenly coat the
                        surface.
                    </li>
                    <li>
                        <span className="text-extrabold">
                            Add fillings (optional):
                        </span>
                        When the eggs begin to set at the edges but are still
                        slightly runny in the middle, sprinkle your chosen
                        fillings over one half of the omelette.
                    </li>
                    <li>
                        <span className="text-extrabold">Fold and serve:</span>
                        As the omelette continues to cook, carefully lift one
                        edge and fold it over the fillings. Let it cook for
                        another minute, then slide it onto a plate.
                    </li>
                    <li>
                        <span className="text-extrabold">Enjoy:</span>
                        Serve hot, with additional salt and pepper if needed.
                    </li>
                </ul>
            </div>

            {/* Nutrition */}
            <div className="nutrition text-[#242424] p-6">
                <h1 className="font-extrabold text-[#854632] text-xl">
                    Nutrition
                </h1>
                <p className="text-left text-sm my-4">
                    The table below shows nutritional values per serving without
                    the additional fillings.
                </p>

                <ul className="text-left mt-2 text-sm  ">
                    <li className="border-b-2 p-2 border-gray-100 flex lg:w-[50%]">
                        <h1 className="text-md">Calories</h1>
                        <span className="text-extrabold ml-auto">277kcal</span>
                    </li>
                    <li className="border-b-2 p-2 border-gray-100 flex lg:w-[50%] ">
                        <h1 className="text-md">Carbs</h1>
                        <span className="text-extrabold ml-auto">0g</span>
                    </li>
                    <li className="border-b-2 p-2 border-gray-100 flex lg:w-[50%] ">
                        <h1 className="text-md">Protein</h1>
                        <span className="text-extrabold ml-auto">20g</span>
                    </li>
                    <li className="border-b-2 p-2 border-gray-100 flex lg:w-[50%] ">
                        <h1 className="text-md">Fat</h1>
                        <span className="text-extrabold ml-auto">22g</span>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default RecipeCard;
