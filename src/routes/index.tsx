import { createSignal } from "solid-js";
import slugify from "slugify";

export default function Home() {
  const [stringRef, setStringRef] = createSignal<HTMLInputElement>();
  const [string, setString] = createSignal<string>("");
  const [slug, setSlug] = createSignal<string>("");

  const createSlug = () => {
    const value = stringRef()?.value;
    const slug = slugify(value || "", { lower: true });

    setString(slug || "");
    setSlug(slug || "");
  };

  const resetSlug = () => {
    setString("");
    setSlug("");
  };

  return (
    <div class="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 class="mb-8 font-serif text-5xl font-extrabold">Slugify</h1>

      <div>
        <div class="mb-4">
          <label
            for="string"
            class="mb-2 block text-sm font-medium text-gray-900"
          >
            Any ordinary string
          </label>
          <input
            ref={(val) => setStringRef(val)}
            value={string()}
            type="text"
            id="string"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Completely deploy unique imperatives and robust vortals"
            required
          />
        </div>

        <div class="mb-4">
          <label
            for="slug"
            class="mb-2 block text-sm font-medium text-gray-900"
          >
            Human-readable url slug
          </label>
          <input
            value={slug()}
            type="text"
            id="slug"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="completely-deploy-unique-imperatives-and-robust-vortals"
          />
        </div>

        <div class="flex gap-4">
          <button
            type="button"
            class="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => createSlug()}
          >
            Submit
          </button>

          <button
            type="button"
            class="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
            onClick={() => resetSlug()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
