import React from "react";
function Finding() {
    return (
        <div> 

            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">상태</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalClass"
                        type="radio"
                        tabindex="-1"
                        name="class"
                    />

                    <label
                        for="totalClass"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="inClass"
                        type="radio"
                        tabindex="-1"
                        name="class"
                    />

                    <label
                        for="inClass"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 온라인 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="outClass"
                        type="radio"
                        tabindex="-1"
                        name="class"
                    />

                    <label
                        for="outClass"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 오프라인 </span>
                    </label>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">분야</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="totalPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="studyPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="studyPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 교통 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="hobbyPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="hobbyPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 의료 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="bandPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="bandPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 행정 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="drinkPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="drinkPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 법률 </span>
                    </label>
                </div>

            </div>

           
        
            <br />
            <br />
            <div class="flex justify-center">
                <button class="text-center rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800" onClick={() => alert('아직 개발 중입니다.')}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Finding;