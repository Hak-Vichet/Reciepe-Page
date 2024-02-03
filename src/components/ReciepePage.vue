<template>
  <div class="flex items-center justify-center h-full bg-orange-100 p-10">
    <div class="max-w-lg bg-white p-4 my-20 rounded-2xl space-y-4">
      <img src="/image-omelette.jpeg" alt="image" class="rounded-xl" />

      <h1 class="text-xl text-gray-700 font-bold">Simple Omelette</h1>
      <p class="text-gray-400 text-xs">
        An easy and quick dish, perfect for any meal. The classic omelette
        beaten eggs cooked to perfection, optionally filled with your choice of
        cheese, vegetable, or meats.
      </p>

      <div class="p-4 bg-pink-200/30 rounded-lg space-y-2">
        <h2 class="text-md font-bold text-pink-800">Preparation time</h2>
        <li class="text-sm font-bold">
          Total:
          <span class="font-normal text-xs text-gray-400"
            >Approximately 10 minutes</span
          >
        </li>

        <li class="text-sm font-bold">
          Preparation:
          <span class="font-normal text-xs text-gray-400">5 minutes</span>
        </li>

        <li class="text-sm font-bold">
          Cooking:
          <span class="font-normal text-xs text-gray-400">5 minutes</span>
        </li>
      </div>

      <!-- Ingredients -->
      <h1 class="text-xl font-bold text-orange-700">Ingredients</h1>
      <div class="space-y-2">
        <li class="text-xs text-gray-500 pl-2">2-3 large eggs</li>
        <li class="text-xs text-gray-500 pl-2">Salt, to taste</li>
        <li class="text-xs text-gray-500 pl-2">Pepper, to taste</li>
        <li class="text-xs text-gray-500 pl-2">
          1 tablespoon of butter or oil
        </li>
        <li class="text-xs text-gray-500 pl-2">
          Optional fillings: cheese, diced vegetable, cooked meats, herbs
        </li>

        <!-- Instructions -->
        <h1 class="text-xl font-bold text-orange-700">Instructions</h1>
        <ol class="space-y-2 list-decimal list-inside">
          <li class="text-sm text-gray-700 font-bold pl-2">
            Beat the eggs:
            <span class="text-xs font-normal"
              >In a bowl, beat the eggs with a pinch of salt and pepper until
              they are will mixed. You can add a tablespoon of water or milk for
              a flutter texture.</span
            >
          </li>

          <li class="text-sm text-gray-700 font-bold pl-2">
            Heat the pan:
            <span class="text-xs font-normal"
              >Place a non-stick frying pan over medium heat and add butter or
              oil.</span
            >
          </li>

          <li class="text-sm text-gray-700 font-bold pl-2">
            Cook the omelette:
            <span class="text-xs font-normal"
              >One the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.</span
            >
          </li>

          <li class="text-sm text-gray-700 font-bold pl-2">
            Fold and serve:
            <span class="text-xs font-normal"
              >When the eggs begin to set at the edges but are still sligthly
              runny in the middle, prinkle your chosen fillings over one half of
              the omelette.</span
            >
          </li>

          <li class="text-sm text-gray-700 font-bold pl-2">
            Fold and serve:
            <span class="text-xs font-normal"
              >As the omelette continues to cook, carefully lift one edge and
              fold it over the filtings. Let it cook for another minute, then
              slide it onto a plate.</span
            >
          </li>

          <li class="text-sm text-gray-700 font-bold pl-2">
            Enjoy:
            <span class="text-xs font-normal"
              >Serve hot, with additional salt and pepper if needed.</span
            >
          </li>
        </ol>

        <!-- Nutrition -->
        <h1 class="text-xl font-bold text-orange-700">Nutrition</h1>
        <p class="text-xs text-gray-600">
          The table below shows nutritional values per serving without the
          additional filings.
        </p>

        <table class="min-w-full">
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b text-sm">Calories</td>
              <td class="py-2 px-4 border-b text-sm font-bold">277kcal</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b text-sm">Carbs</td>
              <td class="py-2 px-4 border-b text-sm font-bold">0g</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b text-sm">Protein</td>
              <td class="py-2 px-4 border-b text-sm font-bold">20g</td>
            </tr>
            <tr>
              <td class="py-2 px-4 text-sm">Fat</td>
              <td class="py-2 px-4 text-sm font-bold">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>
