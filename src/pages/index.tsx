import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen items-center justify-center bg-gray-300">
        <div className="z-10 flex w-96 flex-col items-start p-5">
          <div className="flex items-center py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              className="mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"></path>
              <circle cx="15" cy="10" r="2"></circle>
              <circle cx="9" cy="10" r="2"></circle>
            </svg>
            <h1 className="pb-2 text-7xl font-bold text-gray-700">NEPHOS</h1>
          </div>
          <p className="py-3 text-3xl font-bold text-gray-600">
            Premium Bulma Ecommerce Frontend
          </p>
          <p className="text-2xl font-semibold text-gray-500">
            Kickstart your app project with multiple layout starters and
            carefully handcrafted components
          </p>
          <div className="grid grid-cols-3 gap-5 pt-10">
            <img src="data:image/png;base64,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" />
            <img src="data:image/png;base64,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" />
            <img src="data:image/png;base64,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" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAYAAACKuMJNAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAvPSURBVHhe7Z0H8CRFFcbBiGLEUGUWc865Sj1UzJaUljkihjIUYmmVZUZRMQCKOXtmBXPOnkgh5liigHjmnHP2+8nusbfs//47Mz2ve7q/V/XVf29vpvv1e9/OdHj9evfdLLZAoAV2D6zLVdkCu5lwJkGoBUy4UHO7MhPOHAi1gAkXam5XZsKZA6EWMOFCze3KTDhzINQCJlyouV2ZCWcOhFrAhAs1tysz4cyBUAuYcKHmdmUmnDkQagETLtTcrsyEMwdCLWDChZrblZlw5kCoBUy4UHO7MhPOHAi1gAkXam5XZsKZA6EWMOFCze3KTDhzINQCJlyouV2ZCWcOhFrAhAs1tysz4cyBUAuYcKHmdmUmnDkQagETLtTcrsyEMwdCLWDChZrblZlw5kCoBUy4UHO7MhPOHAi1gAkXam5XZsKZA6EWMOFOb+7L66sbCtcTriKcVziXcM7Z58U7/qx//F74w+zvT/T3i8I3ha8L20O9OYHKTLhTnbSP8BDhlitINcSNv9LN24RPzf5+a0hhNdzbMuF4Yt1PeKhwpSBnnqh6XiG8VvhNUJ1FVdMq4faXF44QzpPRG29S3U8Xvp1Rh/CqWyPcJWZPF16hJci/pcQrhScJvH6rl5YI9xh58xBhjwK9+ifp9AThBQXqllSlFgh3OVmM19d1klpunMI+oWLvJfx8nOLzl1o74a4mE39ayNlX6+plXq2Q7qNdb5zC9TUT7tpywCcF5tCmJv+VwkzT0L+rSmol3A3kpY8Le07cW0+T/k+ZeBt2Ur9Gwt1cLXyfcLZKHMVTjqcdT73JS22E21seYTa/xJHoELK8WDc/YkgBpdxbE+HOJKN+XrhmKcZNrMfjVd6hicsML64mwjFrz1xWzXIfNe6NhTSQfvLxXXWphXDXV8OPE87Q1QATu56Vif2E92fW+0Kq/3HCgV31qIVwJ6jhV+jY+O/pesKJMN6Fhan0+/4mXW8lHNOxvSkv/7AKYzL9DV0LrYFw/OLftUnDiU17j8Bk6nbhRyuu30vfXUSgD0gECa+MUuWPUuymwlcyKPhC1ckABlvxg+0kNRCOfgSv1GX5gb7AOG8RftzJKqdefA3hIIEQphIF0t1V4GkTJUTYPEo4Rbh0n0qnTribqNEsXS0KRGM092rhn32MsnQPy2PEr10rQVmpi/iPCmRimAHTmHJuFb5V4G2CvEY4oE+FUyccnefbLTQcYjxc+GsfY2xyD5OvzxUI3CxNjpVCDxBOGkExuhZvEy6+UPYWfV7+oa9V9ZQJx4L8b2ethGAQDcKNKQxMPiRccsxKepb9d93Hk+7ZQoonO0+1Zwr80M64oNOX9Zl16l4yZcLdWS1+u8BGllsL/MojBKJTL0toJcp3pNThAvN1fZ70rD/fe0Y2BlLLcnt98YG+DZ8y4Vjuub/AFEEU2RbtzHotxi9VGFS8Tni98IVNlLzArC131182Em0k39B/0KftLVMmHL9kQrOP6t36YTcyb8cv/WbDigm7m2U/BlSM2Hn9XkZgaoPR5vnX1IJR8dFrXrvysqkS7oJqzTOEBw1pfIJ7z64ytgnXTVBW6UUQ7rXvUCWnSjg6rUSF9OmjDLXZ8v10rnmls2m6ViHknfYN3ugzVcKV5liWxugn8bdG4cnGE26wmHCDTbijAFJEsOoxpf0T67T+JbqIKackYsIlMeOOQq6qT6R1OF/aYrOVxpzjHYUU83r/b4QJl96XjP7YvHOx9EWHlsho9J7Cv1LWasKltOZpZRHyBOm6hkyNo033Ugk9Itgz+T4KE667M9a94xy6kAAC5q6mJCzMP3AMsvmVGkMDwpteKkxhF9ljpedzxjSLn3BjWve0sunPPV+4U0x1nWshiSL9tTGiTXZSxoTr7JtBN7AMRn64XsGLg2peffNf9PUTZz+G5P21VVWacCN4cY0iyeT0SOGia1w7xiVE2LxIIKrkl2NUsFGZJlyktXeuC9sTVkW8GVEnizFnY2n1CxV85Ixs5CUOFxMu3OQrK2R1gnD5WwhbBCaQU8rXVBgDl5enLLRPWSZcH6uNfw9TKuweI/bs6sJlBVYvCBQgG9Ty8hl9MZ5Yc/xUnz8nfFYgLImEh0VIaYTD0KSrv5HATiwmUDHwPG094UCLQog5aesBSZqJ9fq+QNzXyQKbo9nHaSnEAiUQjjBmdgCRhI9fc0ohfIltdO8V2LsKMS0ZLZCTcDzBHiYwEx+x6/0fM9LRj2GB3ZLBAjkIx2sSp98hQ3vnVZLm4XkCG6UtgRaIJBx1MQXANrZS0qByUAdzYmyIsQRYIIpwl1Jbtgo3DmhTnyrIHv5ggRQGlhEtEEE40jqxobZ0YYDxaIH5KstIFhiTcJRNOidGn1MSRrX7Cz+bktJT0XUswpEY8K3CXaZiiCU9WQIiHVZT52BF+GoMwpFrl1QIxMJPWX4n5dnVz0y9JZEFUhPurNKLCdbbJNIvdzH068jO5Hm7RJ5ITTjOFCA8uSYhLcI+AuuSloEWSEk4ngS5kx0PNMeGt7NmS0LC7WNV0Eq5qQhHMhQmUTkfvlYh/JoTCbPEkS0Z9Sz6N5EkhIZPSlIR7mNqNbFctQvRJ+SFyx2BwrmqJB9kND0pSUE4coqRuHkdIZz5uwJhRPxlkEHKKE5qnkoGIroNOdeBGTmTfqGUfRHr+H3HNSkIR5K6XWUO+qD+n5Hru4XNsu8QQcLuIfLVEhtXqrxZiuWY0CZrFEll3in0Suqc26BDCcevbVXadtYkyd/G5C/RqF1lnvaTpSaiXUsUFvwhHZkmI4RBC7v5ifq9r9D5UI4IJTerYyjhWPRezADJgRtPFlImd+ZQM8hbopCFk9E53YMxhZy7LxPm57+y26vP2RNj6rhW2UMIx+N9cZT0Ef37HsI8s/haCqx5EX089nPuKv/smkUlv2y+t5P4utQCweiv8USbyzZ9YF5wkjKEcOwkZ28lcrDw1AALkNOXU5JLlC9JKSa9v5pIOY5f4nREBlWLQjeGI5wmKUMIx/lVbGfjKBzIFyW3VUX0DUs8oAMbkAwGezCY6iqkhLibsNEmad4oUxnNr2x7X8KR1Jm8rwcLEU+2ZeV5nW8TSh7JMmfH7nZGlRvtbqcvtrdAV4HN0JzvtSvhbApGqJOVvoRj7o3+Ws6IkFXnbJXqCAZT84EFoVtzonXRlyTaV+5yQ4nX9iXcYWoMexNC81KsMCBPBeb3ItIk5PQfh7ixrJbjuMqk7e5LOF5pdJJLECZAX1WCIiPqwFTTISOWH1Z0X8KFKbhmRTiDtFM1CikbyETAU27yUgvhcAQjV0Z4NQlpta4o/LCWRtVEOELbtwo51jjH4APRxsy5fWaMwnOVWRPhsCHt4ZRBJk2nLMTcQTYOGqlKaiPc3DlT7tOxeYcdY0ysVye1Eg5HkSSHtPUlTw4vE+rX+oL5RebcqpSaCYfDOBWG89oJ7Sld2I5ILODYkSdZ7VA74TDumQXOHjgoq6U3rpzBAfNsRwhVTH3sys4tEG7eflKY0rcjfq0UYVDAqLqZJDotEW5OMpaISLCT85AOVmkOFd5RCvOj9GiRcHPbcr4pxKPfxGs3QjgO8lnCMRGVlVhHy4Sb+4MAx/2ELQLh8uQcTilEQBMwSZh8nxi5lLpkL8uEO70LCColOIGNxoAR7mYbvCHVPGU9n08QSA3BOqgzMC3Y2ITL/ptvSwETri1/Z2+tCZfdBW0pYMK15e/srTXhsrugLQVMuLb8nb21Jlx2F7SlgAnXlr+zt9aEy+6CthQw4dryd/bWmnDZXdCWAiZcW/7O3loTLrsL2lLAhGvL39lba8Jld0FbCphwbfk7e2tNuOwuaEsBE64tf2dvrQmX3QVtKWDCteXv7K014bK7oC0FTLi2/J29tSZcdhe0pYAJ15a/s7fWhMvugrYUMOHa8nf21ppw2V3QlgImXFv+zt5aEy67C9pSwIRry9/ZW2vCZXdBWwqYcG35O3trTbjsLmhLAROuLX9nb60Jl90FbSlgwrXl7+ytNeGyu6AtBUy4tvydvbUmXHYXtKXA/wDmVWqsoeUDVgAAAABJRU5ErkJggg==" />
            <img src="data:image/png;base64,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" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAYAAACKuMJNAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAApxSURBVHhe7Z2Nldw0FIWTCgIVZFIBUAFDBUAFzFYAVMBQAVABsxUkVMBsBUAFTCoAKoB3wQYf47EtW+/q7+ocnezu2HpPV1+e/mzN82dKUoCowHOiLZmSAs8EnCCgKiDgqHLLmIATA1QFBBxVbhkTcGKAqoCAo8otYwJODFAVEHBUuWVMwIkBqgICjiq3jAk4MUBVQMBR5ZYxAScGqAoIOKrcMibgxABVAQFHlVvGBJwYoCog4Kblfsf+/N7go+NCq9zsc+Q+PVFbsSBjrQP3vrXVh5YPlvEz/kWOlX7uQMS/yL+MwIxlp5hyWgMOkeszy4hYyPidnW5m8I3lq+Uf2MZT22sFOMD1ueVPUgs+sv+7/f6t5cdWIl/twAGwbywfMgNtyp2L/fFLy4Cw2lQrcOgqv88woi2BBNjOlr9burDUz2sEDoN/wIZ/S00Y4z3UGO1qAw6R7VfLKSYDseHGrPaj2qCrDbifCo9sY2ivHXSxYU5WXk3AnbqudElMLMoieiD163BL96T8HBMJzGSrSDUBh670MNMqWHQFlD1s/aVH++Fi+WWmLYqJxCvLVcxeawEOkQrd6b30RwfjvUYDqADxRabQfW1+nTP1LcitWoBDlPpxpuaf2meY+c2lL+xDrNnlmG5dlMvRtyCfWgFuTT2XomSQsA4Xo1sFeEWnNQ1RQgXnIlxIdPgz48piieSasX+rXGsBOAixpp4Huw4Tj1yTgMuoZeYiHNxcM4Y72XXYocg1CbiMWmYJOMxAP5jxt4QdCgFXEHBw9d7+JLrS15Zz33sVcIUBB3exDnexjIiHqAbI8AhTCXuvAq5A4DJyOdgVARcsmd8NS2M4P8u8kgUcT+tFSwJuUaI8LlizPpWHp/NeCLgSWsl8FHCFNJS5qS41o7ZShMuoMeZcqSXCYXmD/ZAiXqBmJkU4ptoZ2mJv9Au4DCFguiTgNqhdS5e6oeq7bxFwGyTMDThsMQ1PLdpQJdotV5qlfwyNu9QQ4LGlh+087CfjPJMb2fd/zeUAHA6XwX7m0XIJe5qp2moPcGOfL/YHvCdBBy8lcF9ZhfEegSBbh3BM4GARUQ+vIAI+WkoBHCIZHnQ80GpZh6HYwPWqALgHlkRs4E4dbKz61WTHCzhoRIOOCZxg24e/J3DwDGO68z4Xl+9mASfYltti6Qpv4GAfj+GPTyZY8ivocwZwub/vGSRYwosZwN2sfq8868gAbunMD8/61VQ2Azjo5Xp4jjdwGBNg+UNpvwIs4FwPz/EEroRX7/ZjwCuBBRxqhGWSi0fVPIFTdIvbYkzglt7j3VwzT+A0dtvcLJM3MoGDAy4zVi/gsDeKl4uV4imA2eNtUFzI5v0WL3CSOrYeoyYv4ND/Y1NeKZ4C47byBs6lW/UC7jfTWZvy8WDDcbHjoyi8gYP346i6u0YewB3Nq7nTKHc73WABj1bn06DerMX0NadOBTWHB3Do93M9ujRInIwuHjc8a4wcfX/VAziN3+KSigOxx8MTvKGGL6vzTk9mAD1WtOQBXG1fzhFN7I0FTW01sTS+deO4ja7//zYP4BiD2WgCZF7Q1GThYD4zj4aNykjUwrrQjxmq0n4F0JWiOxs/LsTqTvsaRJ2pxgYOAmmG6gdbiv3p8Q7HrtrFBo41e9pV6cxvvvcVTXD7bJn99E3WwKUQJHN+gtzDMgS6TDwiNE6stbex3ahLI7EjnIAL4uvvi99avnT5dud2dKWYmR7Ci999h4DbLWHaAtBlAixMBq5dnvMIsGFcPN7aYtVCwAUqjQZGw6KB+4ae6rICi6VcfjQreOom5b60gFvZ1Hi8BuMhQFZaOpjDmBycMnBcwC00Ag5rwX5uaaAhin1sGTN95FySgJtpiRBxcIIlIglyqoRxGUBL7cdc/UM0XdSxplnqg9X2MlNjNGofQY6LyuiCXgEBN8HCnCgALZfxUIkYZw1cimfhpja4+4bFIzznrtsqsbFz8Hmp5wjyMXaXiq6KvZd6b+sFR4KdgtTQxVMKZL21xQbuyRSaGo8Jtnj/eaK+Lhg7wqGazOfhpp65RxfK3uCO17z5lRSVkaiFdVqxgJt69DrVBnd+mMTxaErjXSV7AHc1jxjf0vI4MUbD+HGqi90lUsM33xuybJbEA7iLecN4CXr8rP/B7DIfvd4sekE3Rl0SQb09gGMtjYxnT+xHrwviZrOrRbyXypqpvmsyDp/6YHXlm1uvwBvHGu+ugkeEg1MA4cVu7+YLGPvOmqw4Vyub4ucW1Dc76QXcG/MI+5aeaeg7NsD1tlhctV2OXvUC7mR1x+KrZxr6zurGPeuTW9mvzKFbbKe8gEPEgbOe3aqAi03Df+XhmUKXZ/K8gIPrF8ueyyMCzg+4qPunQzc9gfNe9RdwPsBFX+xlAQc7V8teuw4Czge4qJv1Yxc9IxxsHSx7rf4LuPjAuZzry4xwsOW1AyDg4gLn2pX2rnpHuN4O3gmN/dXiAi4ecFjkPVp2f1+XBRy6VkAXc5lEwMUBjgYb3GUBB1uYtWISEQs6AbcfOKy3nRiRjd2l9vYQ6bDtFaN7FXDbgcODlXiq57K9iG13MiPc0MOz/bL3MXABF97m6D4xiaODlirCDSVCtMP/MoT0Ld1sauAwqyshYeyMfLV8S+1wqgg3rjfGd0fLIacEIUr2CfeyX0/MRbvUDAXZr0U0ARfU7OkuFnDbta9Fu+0KbLizFtFSRDjYZCYM+N0XZr0rJOC8FY5XvtsjQ/FcXC5JwC1rlMsVAi6XljA/UnSp7OoLOLbiM/YEXEaNMeeKutRCGsrcVITLqK0U4TJqDEW4/BrjbefSywDXFOECxPK+tJQIh0e4z4P1NGzlYT95zYMMAs6booDySwDuwepzuVOnNW+4CbgAILwvzR24RxPgtCACIt9cpBNw3hQFlJ87cGtgOVh9595wW1NGgGRpLtWyCEf3tTrPnTol4DhttcpK7hFu7Tlrc0eOCbhVKPAuyvl8uDWwLE0c1pTBU3ujpbWhfmPx1NsYZ9JtrdDVbgQwcwnfizp3YpGA26q+0325d6t4eQWH/E0lfEUTPr+Xoh9f79QGi8XWFOFQWUQSr8NzFsVccQH8O1vGTgMmCHhdEgu/S2exrVlWWWE+/SW1AXcwSWO/4Z+6lRDdML67pXYkhv3agIMmiBYYD9WS5nYoiqtjjcChEU6WMSba8r5rTo3ocrBzygrWChw0RTd06cZJKTXeYjvZUQxbnA25p2bgoEP/NAYG5qVEu6cuQlcxZhvDWDtwfX0P9sPZMsZ3uYIH0ODjNSRilHZtK8D17YKIB+hOlnNYPsHyCBas0fVjdl19ag24YYMCvmOXMd5jAAjA+oNlEMmagGwoesvATUUTgNeDiM/73/trD/bD1GPhGOQP4cGibv/7zX5GBmDNJwHXPAJcAQQcV+/mrQm45hHgCiDguHo3b03ANY8AVwABx9W7eWsCrnkEuAIIOK7ezVsTcM0jwBVAwHH1bt6agGseAa4AAo6rd/PWBFzzCHAFEHBcvZu3JuCaR4ArgIDj6t28NQHXPAJcAQQcV+/mrQm45hHgCiDguHo3b+0vl3uxrJs6moYAAAAASUVORK5CYII=" />
          </div>
        </div>
        {/* <div className="mx-0 h-0 w-0  lg:mx-24 lg:h-96 lg:w-[700px]"></div> */}
        <Image
          className="ml-0 h-0 w-0 xl:ml-44 xl:h-[500px] xl:w-[700px] 2xl:h-[700px] 2xl:w-[900px]"
          src="/ui.png"
          alt="ui"
          height={1920}
          width={1080}
        />
        <div className="absolute top-[30%] h-96 w-full -skew-y-12 bg-gray-800/10"></div>
      </main>
    </>
  );
};

export default Home;
