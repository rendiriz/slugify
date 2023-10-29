// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Title>Slugify — Rendi Riz</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="Slug Generator" />
        <Link rel="icon" href="/favicon.svg" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Marcellus&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <main>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
            <footer class="mt-8 border-t">
              <div class="mx-auto w-full max-w-4xl p-4">
                <div class="flex flex-col justify-between gap-2 text-center md:flex-row">
                  <span>
                    Made with{" "}
                    <a
                      class="text-gray-800 hover:text-blue-500 hover:underline"
                      href="https://start.solidjs.com"
                      target="_blank"
                    >
                      Solid Start
                    </a>
                  </span>
                  <a
                    class="text-gray-800 hover:text-blue-500 hover:underline"
                    href="https://github.com/rendiriz/slugify"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </footer>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
