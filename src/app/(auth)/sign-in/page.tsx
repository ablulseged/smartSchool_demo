"use client";
import "./style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default function Page() {
  const route = useRouter();

  const handleSub = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    // Mock login - redirect immediately
    const payload = {
      email: data.email,
      password: data.mot_de_passe,
    };

    console.log("Login payload:", payload);
    alert("Login successful (Mock)");
    route.push("./");
  };

  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  return (
    <form onSubmit={handleSub}>
      <div className="flex justify-center items-center h-screen login">
        <div className="w-3/5 h-3/5 max-w-2xl bg-gray-500 bg-opacity-5 rounded-3xl  flex justify-between sm:grid-cols-2 lg:grid-cols-3 partie">
          {/* Left section */}
          <div className="mt-6 mx-3 w-2/5 partie1">
            {/* Header */}
            <div className="flex">
              <img src="logo.ico" width={30} height={30} alt="Logo" />
              <h1>TECHNOLAB ISTA</h1>
            </div>
            {/* Input section */}
            <div className="mt-7 flex flex-col h-5/6 justify-between centre">
              <h2>LOGIN</h2>
              <div className="relative">
                {/* Email Input */}
                <input
                  type="email"
                  name="email"
                  placeholder={!isFocused1 ? "Email" : ""}
                  onFocus={() => setIsFocused1(true)}
                  onBlur={() => setIsFocused1(false)}
                  className="InputSEARCH w-full pr-10 mr-2"
                />
                {/* Icon */}
                {!isFocused1 ? (
                  <EnvelopeIcon />
                ) : (
                  ""
                )}
              </div>
              <div className="relative">
                {/* Password Input */}
                <input
                  type="password"
                  name="mot_de_passe"
                  placeholder={!isFocused2 ? "Password" : ""}
                  onFocus={() => setIsFocused2(true)}
                  onBlur={() => setIsFocused2(false)}
                  className="InputSEARCH w-full pr-10 mr-5"
                />
                {/* Icon */}
                {!isFocused2 ? (
                  <LockIcon />
                ) : (
                  ""
                )}
              </div>
              <a href="" className="text-right text-cyan-500">
                Forgot password?
              </a>
              <button
                className="bg-cyan-500 text-white py-2 px-4 rounded-md mt-8 phone "
                type="submit"
              >
                Sign In
              </button>
              <span className="flex justify-between mt-1 phone login-icon">
                <a
                  href="https://www.technolab-ista.net/"
                  title="google"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src={"img/icon-google.svg"}
                    alt="icon"
                    width={30}
                    height={30}
                  ></Image>
                </a>
                <a
                  href="https://www.facebook.com/TechnolabIstaOfficielle"
                  title="facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src={"img/icon-facebook.svg"}
                    alt="icon"
                    width={30}
                    height={30}
                  ></Image>
                </a>
                <a
                  href="https://www.linkedin.com/company/technolab-ista/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BBdr4ymZfTTixB3DRiIJXNw%3D%3D"
                  title="linkedin"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src={"img/icon-linkedin.svg"}
                    alt="icon"
                    width={30}
                    height={30}
                  ></Image>
                </a>
              </span>
            </div>
          </div>
          {/* Right section - decorative */}
          <div className="flex rounded-2xl partie2">
            <svg
              viewBox="0 0 566 840"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-2xl"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
      0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
      591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
      167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
                />
              </mask>

              <g mask="url(#mask0)">
                <path
                  d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
      0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
      591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
      167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
                />
                <image href="/img/bg3.jpg" width="662" height="840" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </form>
  );
}
