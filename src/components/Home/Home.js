import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { getRecentPosts } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";

function Home() {

  const getRecentUserPosts = async () => {
    try {
      const response = await getRecentPosts();
      console.log(response);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  }

  useEffect(
    () => {
      getRecentUserPosts()
    }, []
  )

  return (
    <Layout>
      <div className="w-full">
        <div className="d-flex flex-row mt-4 justify-between">
          <img src="/landing_bg.png" alt="Landing Background" className="w-full" />
        </div>
        <section className="d-flex flex-row mt-4 justify-between">
          <aside className="flex-col w-25">
            <div className="card rounded p-5">
              <h2 className="text-md">Newest Members</h2>
              <div className=" mt-2">
                <div className="rounded">
                    <h6 className="font-bold m-0">Item 1</h6>
                    <p>@sandra_stage</p>
                </div>
                <div className="rounded">
                    <h6 className="font-bold m-0">Item 2</h6>
                    <p>@sandra_stage</p>
                </div>
                <div className="rounded">
                    <h6 className="font-bold m-0">Item 3</h6>
                    <p>@sandra_stage</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-col flex-grow mx-4">
            <div className="card rounded p-3 mb-4 d-flex flex-row justify-between">
              <div>All Updates</div>
              <div>test</div>
            </div>
            <div className="card rounded p-3">
              <h2 className="text-md">Main Content</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod eu libero et bibendum. Morbi non bibendum erat.
                Vestibulum lacinia aliquet euismod. Donec consequat, orci ac
                vulputate leo, sed malesuada purus erat ut ex.
              </p>
            </div>

            <div className="d-flex flex-row justify-between mt-4">
              <div className="card w-45 p-3 rounded">
                <h3 className="text-md">Content Box 1</h3>
                <p>More content here...</p>
              </div>

              <div className="card w-45 p-3 rounded">
                <h3 className="text-md">Content Box 2</h3>
                <p>More content here...</p>
              </div>
            </div>
          </main>

          <aside className="flex-col w-25">
            <div className="card rounded p-3">
              <h2 className="text-md">Notifications</h2>
              <ul className="list-group mt-2">
                <li className="list-group-item rounded">Notification 1</li>
                <li className="list-group-item rounded">Notification 2</li>
                <li className="list-group-item rounded">Notification 3</li>
              </ul>
            </div>
          </aside>
        </section>

        <footer className="py-4 bg-secondary text-primary mt-5">
          <p className="text-center text-xl">Footer Content Here</p>
        </footer>
      </div>
    </Layout>
  );
}

export default Home;
