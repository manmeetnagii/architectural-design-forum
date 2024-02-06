const jsonData = [
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "Q1-FY20-AnalystCallTranscript (1).pdf",
    month: "april",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "Notes_with_Annotation.pdf",
    month: "march",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "Handwritten_Notes.pdf",
    month: "january",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "Handwritten_notes_with_a_01_Feb_2024.pdf",
    month: "february",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "Notice-of-Q1-Board-Meeting-for-Unaudited-Financial-Results.pdf",
    month: "may",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "5_6222066869143079943.pdf",
    month: "july",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "KT Holmesglen Backend (1).pdf",
    month: "june",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2009-2010",
    pdf: "Adobe Scan 23-Jun-2023.pdf",
    month: "august",
    year: "2009-2010",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "IndusIndBank-Press-Release-FR-27Apr2020.pdf",
    month: "june",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "FinancialResults.pdf",
    month: "february",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "notice-Q3-board-meeting-unaudited-financial-results.pdf",
    month: "september",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "Q1-FY20-AnalystCallTranscript (1).pdf",
    month: "april",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "Notice-of-Q2-Board-Meeting-for-Unaudited-Financial-Results.pdf",
    month: "august",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "audited-financial-results-as-on-31Mar2020.pdf",
    month: "january",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "Notice-of-Q1-Board-Meeting-for-Unaudited-Financial-Results.pdf",
    month: "may",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "Handwritten_Notes.pdf",
    month: "march",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "Transcript-Analyst-CallQ3FY20.pdf",
    month: "december",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "PressRelease-IndusIndBank-Q3FY20_consol_final.pdf",
    month: "october",
    year: "2019-2020",
  },
  {
    path: "/content/dam/adsblogs/investor/2019-2020",
    pdf: "Notice-of-Q1-Board-Meeting-for-Unaudited-Financial-Results.pdf",
    month: "july",
    year: "2019-2020",
  },
];

const year1 = document.getElementById("year1");
const year2 = document.getElementById("year2");
const months1 = document.getElementById("months1");
const months2 = document.getElementById("months2");
const jan1 = document.getElementById("jan1");


function togglemonths1(){
    // Toggle the display property
    if (months1.style.display === 'none' || months1.style.display === '') {
      months1.style.display = 'block';
    } else {
      months1.style.display = 'none';
    }
  };

function getjan1(){
    const newArr = [];
    for(let i=0; i<=jsonData.length; i++){
        if(jsonData[i].month === "april" && jsonData[i].year === "2009-2010"){
            newArr.push(jsonData[i].pdf)
            console.log(newArr)
            
        }
        else {
            return 0;
        }
    }
}

getjan1();





year1.addEventListener("click", togglemonths1);
jan1.addEventListener("click", getjan1);
