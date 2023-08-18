import React, {useState} from 'react';


function Sorting() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<div>
        <br />
        <br />
        <div class="grid grid-cols-1 gap-0 font-medium">
            <p class="text-white block text-2xl font-bold w-full p-3 bg-violet-900">즐겨찾기</p>
            <br />
            <div>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSKREaMorPjzlheT1l_xaELD9Wx1fVf6GXw&usqp=CAU"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        교통
                                    </span>
                                   전문가 이름
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">온라인</p>
                                    </span>

                                    <span>  </span>
                                
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                전문가 한 줄 소개
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                채팅하기
                            </button>

                            <div class="float-left mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3">
                                <div class="flex items-center gap-1 text-gray-500">
                                    
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">인증됨</span>
                        </strong>
                    </div>
                </article>

                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVhcnRofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        의료
                                    </span>
                                    일반 사용자 이름
                                    <span>  </span>
                                    <span
                                       class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                       

                                       

                                        <p class="whitespace-nowrap text-sm">오프 라인</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                일반 사용자 한 줄 소개
                                </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                               채팅하기
                            </button>

                            <div class="mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3 float-left">
                                <div class="flex items-center gap-1 text-gray-500">
                                   
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                
            
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                        
                            
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                          
                        
                        </strong>
                    </div>
                </article>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                        <img
                                alt="Speaker"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSKREaMorPjzlheT1l_xaELD9Wx1fVf6GXw&usqp=CAU"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        행정
                                    </span>
                                    전문가 이름
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">온라인</p>
                                    </span>

                                    <span>  </span>
                                    
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                전문가 한 줄 소개
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                채팅하기
                            </button>

                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">인증됨</span>
                        </strong>
                    </div>
                </article>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                        <img
                                alt="Speaker"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSKREaMorPjzlheT1l_xaELD9Wx1fVf6GXw&usqp=CAU"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        행정
                                    </span>
                                    전문가 이름
                                    <span>  </span>
                                  

                                    <span>  </span>
                                    

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">오프라인</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                               전문가 한 줄 소개
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                              채팅하기
                            </button>

                         

                           
                        </div>
                    </div>

<div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">인증됨</span>
                        </strong>
                    </div>
                </article>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                        <img
                                alt="Speaker"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSKREaMorPjzlheT1l_xaELD9Wx1fVf6GXw&usqp=CAU"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                       법률
                                    </span>
                                    전문가 이름
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">온라인</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                                    >
                                       

                                       
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                              전문가 한 줄 소개
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                               채팅하기
                            </button>

                          
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">인증됨</span>
                        </strong>
                    </div>
                </article>
            </div>
        </div>
    </div>
    )
}
export default Sorting;


