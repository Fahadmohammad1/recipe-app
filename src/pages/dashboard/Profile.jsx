import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const { displayName, email, emailVerified, photoURL } = user;
  console.log(displayName, email, photoURL);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <div className="max-w-lg mr-auto bg-white shadow-md rounded-2xl">
        <div className="relative flex h-32 w-full justify-center bg-cover">
          <img
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
            src="https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=3216&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute -bottom-12 flex h-[120px] w-[120px] rounded-full border-[6px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-full"
              src={
                photoURL
                  ? photoURL
                  : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
              }
              alt=""
            />
          </div>
        </div>

        <p className="text-3xl font-bold text-center mt-14 text-custom-third">
          {displayName ? displayName : "Not Set"}
        </p>
        <p className="text-center font-light">{email ? email : "Not Found"}</p>
        <p className="text-center font-light">
          Email Verification : {emailVerified ? "Verified" : "Not Verified"}
        </p>

        <div className="mx-auto flex flex-wrap justify-center gap-2 mt-6 pb-8">
          <button className="font-semibold text-black">
            <svg
              className="w-8 h-8 fill-current"
              role="img"
              xmlns="/"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="font-semibold text-black ">
            <svg className="w-8 h-8 fill-current" xmlns="/" viewBox="0 0 88 88">
              <path
                className="cls-1"
                d="M26,0C11.66,0,0,11.66,0,26v36c0,14.34,11.66,26,26,26h36c14.34,0,26-11.66,26-26V26c0-14.34-11.66-26-26-26H26ZM26,4h36c12.17,0,22,9.83,22,22v36c0,12.17-9.83,22-22,22H26c-12.17,0-22-9.83-22-22V26C4,13.83,13.83,4,26,4ZM68,16c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4ZM44,22c-12.13,0-22,9.87-22,22s9.87,22,22,22,22-9.87,22-22-9.87-22-22-22ZM44,26c9.96,0,18,8.04,18,18s-8.04,18-18,18-18-8.04-18-18,8.04-18,18-18Z"
              />
            </svg>
          </button>
          <button className="font-semibold text-black">
            <svg
              className="w-8 h-8 fill-current"
              role="img"
              xmlns="/"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button className="font-semibold text-black">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="/"
              viewBox="0 0 124.27 143.91"
            >
              <path
                className="cls-1"
                d="M117.03,31.39c-17.22,0-31.23-14.01-31.23-31.23h-.16v-.16h-24.47v101.09c0,10.12-8.23,18.35-18.35,18.35s-18.35-8.23-18.35-18.35,8.23-18.35,18.35-18.35v-24.47C19.21,58.27,0,77.48,0,101.09s19.21,42.82,42.82,42.82,42.64-19.03,42.81-42.5h0v-56.83c8.87,6.29,19.71,9.99,31.39,9.99h7.24v-23.18h-7.24Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
