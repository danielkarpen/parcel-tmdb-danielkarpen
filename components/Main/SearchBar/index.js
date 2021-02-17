export default () => `<form class="flex items-center justify-items-center">
  <div class="mr-3">
    <label for="search" class="sr-only">Search</label>
    <input type="search" placeholder="🔍" id="search" name="searchTerm" class="focus:ring-transparent rounded-md focus:shadow-lg transition duration-300 ease-in-out" />
  </div>
  <button class="bg-green-500 text-white rounded-md p-2 hover:shadow-md transition duration-300 ease-in-out">Search!</button>
</form>
`;
