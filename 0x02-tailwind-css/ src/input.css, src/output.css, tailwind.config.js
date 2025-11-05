<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="A blog post about semantic HTML and accessibility practises" />
    <meta name="keywords" content="HTML, Semantic, Accessibility, Blog, SEO" />
    <meta name="author" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic Html Blog Post</title>
    <link href="./src/output.css" rel="stylesheet" />
  </head>
  <body class="bg-gray-50 text-gray-800 font-sans">
    <header class="bg-white shadow p-4">
      <h1 class="text-3xl font-bold text-blue-600">My Blog</h1>
      <nav class="mt-2">
        <ul class="flex space-x-4 text-blue-500">
          <li><a href="#home" class="hover:underline">Home</a></li>
          <li><a href="#about" class="hover:underline">About</a></li>
          <li><a href="#contact" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto p-6">
      <article class="bg-white p-6 rounded shadow">
        <header>
          <h2 class="text-2xl font-semibold text-gray-700">Understanding Semantic Html</h2>
          <p class="text-sm text-gray-500">Published on <time datetime="2024-09-10">September 10</time></p>
        </header>

        <section class="mt-4">
          <h3 class="text-xl font-semibold text-gray-700">Introduction</h3>
          <p class="mt-2">
            Semantic HTML helps improve the accessibility and SEO of your website. In this post, we’ll explore its benefits and how to implement it.
          </p>
        </section>

        <section class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">Main Content</h3>
          <p class="mt-2">
            Using elements like 
            <code class="bg-gray-100 px-1 rounded">&lt;article&gt;</code>, 
            <code class="bg-gray-100 px-1 rounded">&lt;section&gt;</code>, 
            <code class="bg-gray-100 px-1 rounded">&lt;header&gt;</code> 
            ensures that both users and search engines can better understand the structure and content of a webpage.
          </p>
          <figure class="mt-4">
            <img src="" alt="example" class="w-full h-auto border rounded" />
            <figcaption class="text-sm text-gray-500 mt-2">An illustration of semantic HTML elements</figcaption>
          </figure>
        </section>

        <section class="mt-6">
          <h3 class="text-xl font-semibold text-gray-700">Conclusion</h3>
          <p class="mt-2">
            By adopting semantic HTML, you enhance your site's accessibility, improve SEO, and make the content easier to navigate.
          </p>
        </section>

        <footer class="mt-6 border-t pt-4">
          <p class="text-sm text-gray-600">Written by &lt;name&gt;</p>
          <p class="text-sm text-gray-600">Published on 2024-09-11</p>
        </footer>
      </article>

      <section class="mt-10">
        <form action="#" method="POST" aria-labelledby="form-title" role="form" class="bg-white p-6 rounded shadow">
          <h2 id="form-title" class="text-xl font-semibold text-gray-700 mb-4">Contact Form</h2>

          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" aria-required="true" class="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input type="text" id="email" name="email" aria-required="true" class="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div class="mb-4">
            <button type="submit" aria-label="Submit the form" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>

          <div aria-live="polite" role="alert" class="text-sm text-green-600 mt-2">
            <!-- Feedback messages will appear here -->
          </div>
        </form>
      </section>
    </main>

    <footer class="bg-white text-center text-sm text-gray-500 py-4 mt-10 border-t">
      <p>&copy; copyright</p>
    </footer>
  </body>
</html>

