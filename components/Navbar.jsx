import Image from "next/image";
import Link from "next/link";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  let session = null;
  const [authenticated, setAuthenticated] = useState(false);
  const [info, setInfo] = useState(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    let fetchSession = async () => {
      let session = await getSession();
      if (session) {
        setAuthenticated(true);
        setInfo(session.user);
      } else setAuthenticated(false);
    };
    fetchSession();
  }, [session]);

  let handleDropDown = () => {
    dropDownRef.current.classList.toggle("hidden");
  };

  return (
    <div>
      <nav className="w-screen h-20 flex justify-between items-center">
        <Link href="/">
          <div className="flex ml-4">
            <img
              className="w-7"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjlweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjkgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLpobXpnaIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i57yW57uELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTc5MjM2LCAwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC43OTA3NjQ1LDEyLjMzIEwxMC43OTA3NjQ1LDExLjExIEMxMC4zNjcyNjI5LDExLjA0Mjg4ODcgOS45Mzk1MDY3NCwxMS4wMDYxMjg0IDkuNTEwNzY0NDgsMTAuOTk5OTc4NiBDNS4zNTk5NjU0OSwxMC45OTEyMjI4IDEuNjg1MDk2NzksMTMuNjgxMDIwNSAwLjQzODY2NzY5NCwxNy42NDAyNjU4IEMtMC44MDc3NjEzOTksMjEuNTk5NTExMiAwLjY2MzUwNTg0MiwyNS45MDkzODg3IDQuMDcwNzY0NDgsMjguMjggQzEuNTE4NDg0ODQsMjUuNTQ4NDgxNiAwLjgwOTc5OTU0NSwyMS41NzIwODM0IDIuMjYxMjY4MTcsMTguMTI3MDA1MyBDMy43MTI3MzY3OSwxNC42ODE5MjczIDcuMDUzMjk1NDUsMTIuNDExNTQyOCAxMC43OTA3NjQ1LDEyLjMzIEwxMC43OTA3NjQ1LDEyLjMzIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMyNUY0RUUiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTExLjAyMDc2NDUsMjYuMTUgQzEzLjM0MTUyODcsMjYuMTQ2ODc3NiAxNS4yNDkxNjYyLDI0LjMxODU0MTQgMTUuMzUwNzY0NSwyMiBMMTUuMzUwNzY0NSwxLjMxIEwxOS4xMzA3NjQ1LDEuMzEgQzE5LjA1MzYwNjgsMC44Nzc2ODIzMjIgMTkuMDE2NzgxOCwwLjQzOTEzMDk5MiAxOS4wMjA3NjQ1LDAgTDEzLjg1MDc2NDUsMCBMMTMuODUwNzY0NSwyMC42NyBDMTMuNzY0Nzk4LDIzLjAwMDMzODggMTEuODUyNjg1MywyNC44NDYyMTIgOS41MjA3NjQ0OCwyNC44NSBDOC44MjM5MDkxNCwyNC44NDQwNjcgOC4xMzg0Mjg4NCwyNC42NzI2OTY5IDcuNTIwNzY0NDgsMjQuMzUgQzguMzMyNjgyNDUsMjUuNDc0OTE1NCA5LjYzMzQ2MjAzLDI2LjE0Mzg4NzggMTEuMDIwNzY0NSwyNi4xNSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMjVGNEVFIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNi4xOTA3NjQ1LDguMzMgTDI2LjE5MDc2NDUsNy4xOCBDMjQuNzk5NjQsNy4xODA0NzYyNSAyMy40MzkzNzgxLDYuNzY5OTYyNDIgMjIuMjgwNzY0NSw2IEMyMy4yOTY0NDQ2LDcuMTgwNzE3NjkgMjQuNjY4OTYyMiw3Ljk5ODYxMTc3IDI2LjE5MDc2NDUsOC4zMyBMMjYuMTkwNzY0NSw4LjMzIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMyNUY0RUUiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIyLjI4MDc2NDUsNiBDMjEuMTM5NDY3NSw0LjcwMDMzMTYxIDIwLjUxMDI5NjcsMy4wMjk2NTIxNiAyMC41MTA3NjQ1LDEuMyBMMTkuMTMwNzY0NSwxLjMgQzE5LjQ5MDk4MTIsMy4yMzI2ODUxOSAyMC42MzAwMzgzLDQuOTMyMjMwNjcgMjIuMjgwNzY0NSw2IEwyMi4yODA3NjQ1LDYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZFMkM1NSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOS41MTA3NjQ0OCwxNi4xNyBDNy41MTkyMTgxNCwxNi4xODAyMTc4IDUuNzkwMjE2MjYsMTcuNTQ0NTkzIDUuMzE3MjEyMDEsMTkuNDc5MTgwMyBDNC44NDQyMDc3NywyMS40MTM3Njc3IDUuNzQ4NjA5NTYsMjMuNDIyMDA2OSA3LjUxMDc2NDQ4LDI0LjM1IEM2LjU1NTk0ODM0LDIzLjAzMTc3MTggNi40MjEwNjg3MSwyMS4yODk0MzM2IDcuMTYxNjI4ODMsMTkuODM5OTYxMyBDNy45MDIxODg5NiwxOC4zOTA0ODg5IDkuMzkzMDY3MzQsMTcuNDc4Nzc4MiAxMS4wMjA3NjQ1LDE3LjQ4IEMxMS40NTQ3NzUyLDE3LjQ4NTQwODQgMTEuODg1NzkwOCwxNy41NTI3NTQ2IDEyLjMwMDc2NDUsMTcuNjggTDEyLjMwMDc2NDUsMTIuNDIgQzExLjg3Njk5MTksMTIuMzU2NTA1NiAxMS40NDkyNTYyLDEyLjMyMzA4ODcgMTEuMDIwNzY0NSwxMi4zMiBMMTAuNzkwNzY0NSwxMi4zMiBMMTAuNzkwNzY0NSwxNi4zMiBDMTAuMzczNjM2OCwxNi4yMDgxNTQ0IDkuOTQyNDQ5MzQsMTYuMTU3NjI0NiA5LjUxMDc2NDQ4LDE2LjE3IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRTJDNTUiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI2LjE5MDc2NDUsOC4zMyBMMjYuMTkwNzY0NSwxMi4zMyBDMjMuNjE1NDcsMTIuMzI1MDE5MyAyMS4xMDcwMjUsMTEuNTA5ODYyMiAxOS4wMjA3NjQ1LDEwIEwxOS4wMjA3NjQ1LDIwLjUxIEMxOS4wMDk3MzUyLDI1Ljc1NDQxNTggMTQuNzU1MTkxOSwzMC4wMDAwMTE2IDkuNTEwNzY0NDgsMzAgQzcuNTYzMTI3ODQsMzAuMDAzNDU1NiA1LjY2MjQwMzIxLDI5LjQwMjQ5MTIgNC4wNzA3NjQ0OCwyOC4yOCBDNi43MjY5ODY3NCwzMS4xMzY4MTA4IDEwLjg2MDgyNTcsMzIuMDc3MTk4OSAxNC40OTE0NzA2LDMwLjY1MDU1ODYgQzE4LjEyMjExNTUsMjkuMjIzOTE4MyAyMC41MDk5Mzc1LDI1LjcyMDg4MjUgMjAuNTEwNzY0NSwyMS44MiBMMjAuNTEwNzY0NSwxMS4zNCBDMjIuNjA0MDI0LDEyLjgzOTk2NjMgMjUuMTE1NTcyNCwxMy42NDQ1MDEzIDI3LjY5MDc2NDUsMTMuNjQgTDI3LjY5MDc2NDUsOC40OSBDMjcuMTg2NTkyNSw4LjQ4ODM5NTM1IDI2LjY4MzkzMTMsOC40MzQ3NzgxNiAyNi4xOTA3NjQ1LDguMzMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZFMkM1NSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuMDIwNzY0NSwyMC41MSBMMTkuMDIwNzY0NSwxMCBDMjEuMTEzNDA4NywxMS41MDExODk4IDIzLjYyNTM2MjMsMTIuMzA1ODU0NiAyNi4yMDA3NjQ1LDEyLjMgTDI2LjIwMDc2NDUsOC4zIEMyNC42NzkyNTQyLDcuOTc4NzEyNjUgMjMuMzAzNDQwMyw3LjE3MTQ3NDkxIDIyLjI4MDc2NDUsNiBDMjAuNjMwMDM4Myw0LjkzMjIzMDY3IDE5LjQ5MDk4MTIsMy4yMzI2ODUxOSAxOS4xMzA3NjQ1LDEuMyBMMTUuMzUwNzY0NSwxLjMgTDE1LjM1MDc2NDUsMjIgQzE1LjI3NTE1MjEsMjMuODQ2NzY2NCAxNC4wMzgxOTkxLDI1LjQ0MzAyMDEgMTIuMjY4NzY5LDI1Ljk3NzIzMDIgQzEwLjQ5OTMzODksMjYuNTExNDQwMyA4LjU4NTcwOTQyLDI1Ljg2NjM4MTUgNy41MDA3NjQ0OCwyNC4zNyBDNS43Mzg2MDk1NiwyMy40NDIwMDY5IDQuODM0MjA3NzcsMjEuNDMzNzY3NyA1LjMwNzIxMjAxLDE5LjQ5OTE4MDMgQzUuNzgwMjE2MjYsMTcuNTY0NTkzIDcuNTA5MjE4MTQsMTYuMjAwMjE3OCA5LjUwMDc2NDQ4LDE2LjE5IEM5LjkzNDkwMywxNi4xOTM4NjkzIDEwLjM2NjEzODYsMTYuMjYxMjQ5OSAxMC43ODA3NjQ1LDE2LjM5IEwxMC43ODA3NjQ1LDEyLjM5IEM3LjAyMjMzNzksMTIuNDUzNjY5MSAzLjY1NjUzOTI5LDE0LjczMTk3NjggMi4yMDA5NDU2MSwxOC4xOTc2NzYxIEMwLjc0NTM1MTkzOCwyMS42NjMzNzUzIDEuNDc0OTQ0OTMsMjUuNjYxNzQ3NiA0LjA2MDc2NDQ4LDI4LjM5IEM1LjY2ODA5NTQyLDI5LjQ3NTUwNjMgNy41NzE1ODc4MiwzMC4wMzc4MjI0IDkuNTEwNzY0NDgsMzAgQzE0Ljc1NTE5MTksMzAuMDAwMDExNiAxOS4wMDk3MzUyLDI1Ljc1NDQxNTggMTkuMDIwNzY0NSwyMC41MSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
            />
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTdweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgOTcgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4Q8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NzAwMDAsIDAuMjgwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hCIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIzLjU1MjcxMzY4ZS0xNSAwLjA2IDE2LjEyIDAuMDYgMTQuNjQgNC43MiAxMC40NiA0LjcyIDEwLjQ2IDIxLjcyIDUuMjMgMjEuNzIgNS4yMyA0LjcyIDAuMDEgNC43MiI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjQyLjUyIDAuMDYgNTkuMDEgMC4wNiA1Ny41MyA0LjcyIDUyLjk5IDQuNzIgNTIuOTkgMjEuNzIgNDcuNzcgMjEuNzIgNDcuNzcgNC43MiA0Mi41MyA0LjcyIj48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMTcuMSA2Ljk1IDIyLjI3IDYuOTUgMjIuMjcgMjEuNzIgMTcuMTQgMjEuNzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hCIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyNC4zMiAwIDI5LjQ4IDAgMjkuNDggMTAuMDkgMzQuNiA1LjA5IDQwLjc2IDUuMDkgMzQuMjkgMTEuMzcgNDEuNTQgMjEuNzIgMzUuODUgMjEuNzIgMzEuMDEgMTQuNTMgMjkuNDggMTYuMDEgMjkuNDggMjEuNzIgMjQuMzIgMjEuNzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hCIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSI3OS4wMSAwIDg0LjIzIDAgODQuMjMgMTAuMDkgODkuMzQgNS4wOSA5NS41IDUuMDkgODkuMDMgMTEuMzcgOTYuMjMgMjEuNzIgOTAuNTQgMjEuNzIgODUuNzEgMTQuNTMgODQuMjMgMTYuMDEgODQuMjMgMjEuNzIgNzkuMDYgMjEuNzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMDAwMDAwIiBjeD0iMTkuNjkiIGN5PSIyLjY2IiByPSIyLjYiPjwvY2lyY2xlPgogICAgICAgICAgICA8cGF0aCBkPSJNNTguMzUsMTIuODggQzU4LjM1MTU4MTQsOC4yNjY1NzI2OSA2MS45MDA2NDc1LDQuNDMwMDk3NTggNjYuNSw0LjA3IEM2Ni4yNyw0LjA3IDY1Ljk2LDQuMDcgNjUuNzMsNC4wNyBDNjEuMDU1Njk0Niw0LjM0MjY0OTU3IDU3LjQwNDc1NzIsOC4yMTI3NDk1OCA1Ny40MDQ3NTcyLDEyLjg5NSBDNTcuNDA0NzU3MiwxNy41NzcyNTA0IDYxLjA1NTY5NDYsMjEuNDQ3MzUwNCA2NS43MywyMS43MiBDNjUuOTYsMjEuNzIgNjYuMjcsMjEuNzIgNjYuNSwyMS43MiBDNjEuODg5MTMwNywyMS4zNTkwMjIxIDU4LjMzNTg5MTQsMTcuNTA0OTU2NCA1OC4zNSwxMi44OCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMjVGNEVFIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02OC41MSw0LjA0IEM2OC4yNyw0LjA0IDY3Ljk2LDQuMDQgNjcuNzMsNC4wNCBDNzIuMzE0NDYsNC40MTg2NTYzNyA3NS44NDIzMzI1LDguMjQ5OTI4ODkgNzUuODQyMzMyNSwxMi44NSBDNzUuODQyMzMyNSwxNy40NTAwNzExIDcyLjMxNDQ2LDIxLjI4MTM0MzYgNjcuNzMsMjEuNjYgQzY3Ljk2LDIxLjY2IDY4LjI3LDIxLjY2IDY4LjUxLDIxLjY2IEM3My4zOTIxOTcyLDIxLjY2IDc3LjM1LDE3LjcwMjE5NzIgNzcuMzUsMTIuODIgQzc3LjM1LDcuOTM3ODAyODEgNzMuMzkyMTk3MiwzLjk4IDY4LjUxLDMuOTggTDY4LjUxLDQuMDQgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZFMkM1NSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNjcuMTEsMTcuMTggQzY0LjczNTE3NTYsMTcuMTggNjIuODEsMTUuMjU0ODI0NCA2Mi44MSwxMi44OCBDNjIuODEsMTAuNTA1MTc1NiA2NC43MzUxNzU2LDguNTggNjcuMTEsOC41OCBDNjkuNDg0ODI0NCw4LjU4IDcxLjQxLDEwLjUwNTE3NTYgNzEuNDEsMTIuODggQzcxLjQwNDUwMTYsMTUuMjUyNTQzMiA2OS40ODI1NDMyLDE3LjE3NDUwMTYgNjcuMTEsMTcuMTggTDY3LjExLDE3LjE4IFogTTY3LjExLDQuMDQgQzYyLjIyNzgwMjgsNC4wNCA1OC4yNyw3Ljk5NzgwMjgxIDU4LjI3LDEyLjg4IEM1OC4yNywxNy43NjIxOTcyIDYyLjIyNzgwMjgsMjEuNzIgNjcuMTEsMjEuNzIgQzcxLjk5MjE5NzIsMjEuNzIgNzUuOTUsMTcuNzYyMTk3MiA3NS45NSwxMi44OCBDNzUuOTUsMTAuNTM1NDg2MiA3NS4wMTg2NDU1LDguMjg2OTk3NjQgNzMuMzYwODIzOSw2LjYyOTE3NjA1IEM3MS43MDMwMDI0LDQuOTcxMzU0NDcgNjkuNDU0NTEzOCw0LjA0IDY3LjExLDQuMDQgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              alt=""
              className="w-24 ml-1"
            />
          </div>
        </Link>
        {!authenticated && (
          <Link href="/login">
            <span className="text-md px-10 py-3 m-3 bg-[#fe2b54] text-white rounded-sm text-center font-bold border-2 border-[#fe2b54] hover:bg-white hover:text-[#fe2b54] transition duartion-300">
              Log In
            </span>
          </Link>
        )}
        {authenticated && (
          <div className="">
            <button className="rounded-lg" onClick={handleDropDown}>
              <div className="w-12 rounded-full object-fit mr-4">
                <Image
                  src={info.image}
                  alt="profile Image"
                  width={42}
                  height={42}
                  objectFit
                  className="w-12 rounded-full object-fit"
                />
              </div>
            </button>
            <div
              className="hidden absolute top-14 border-2 border-[#f8f8f8] w-36 h-36 right-1 z-50 my-6 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
              ref={dropDownRef}
            >
              <div className="w-full text-left p-4 text-gray-600">
                <p className="text-sm">{info.name}</p>
                <p className="text-[8px] font-thin w-full">{info.email}</p>
              </div>
              <div className="py-1 px-2 h-8 rounded-lg w-full">
                <button
                  onClick={() => signOut()}
                  className="block py-2 px-4 mr-3 mb-2 w-full h-14 text-sm bg-red-600 rounded-lg text-white hover:bg-red-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition duration-300"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="w-full h-px bg-gray-300"></div>
    </div>
  );
};

export default NavBar;
