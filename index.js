let showData = document.getElementById("dataTable");
let company = Object.keys(BILLS)
let ref = 0;

//seatlist = company
for(let i = 0; i < company.length;i++){

    let withoutTotal = 0;
    let taxTotal = 0;
  
    let html = "<table id='myTable'>"

      setTimeout(() => {
        html += "<thead>";
        html += "<tr style='background-color:#444444;color:white;font-weight:600;text-align:center'>";
        html += "<td>" + "Sr No." + "</td>"
        html += "<td>" + "Name" + "</td>";
        html += "<td>" + "GSTIN" + "</td>";
        html += "<td>" + "Invoice No" + "</td>";
        html += "<td>" + "Date" + "</td>";
        html += "<td>" + "Taxable Amt" + "</td>";
        html += "<td>" + "Credit Note" + "</td>";
        html += "<td>" + "Total Amt." + "</td>";
        html += "<td>" + "Image" + "</td>";
        html += "<td>" + "Payment" + "</td>";
        html += "</tr>";
        html += "</thead>";
        for(let i = 0;i < company.length;i++){
          html += "<tr>";
          html += "<td style='text-align:center;'>" + company[i] + "</td>"
          html += "<td>" + BILLS[company[i]].name/*.toUpperCase()*/ + "</td>";
          html += "<td style='text-align:center;'>" + BILLS[company[i]].gstin + "</td>";
          html += "<td style='text-align:center'>" + BILLS[company[i]].invoice_no + "</td>";
          html += "<td style='text-align:center;'>" + BILLS[company[i]].date + "</td>";
          html += "<td style='text-align:right'>" + BILLS[company[i]].amt_without + "</td>";
          html += "<td style='text-align:right'>" + BILLS[company[i]].credit_note + "</td>";
          html += "<td style='text-align:right'>" + BILLS[company[i]].total_amount + "</td>";
          html += "<td style='text-align:center;'>" + `<a href='${BILLS[company[i]].image}' class='img-link'  target="_blank"><span class="material-symbols-outlined">image</span></a>` + "</td>";
          html += "<td style='text-align:center;color:green;font-weight:bolder'>" + BILLS[company[i]].payment_status + "</td>";
          html += "</tr>";
          
          withoutTotal += Number(BILLS[company[i]].amt_without)
          taxTotal += Number(BILLS[company[i]].total_amount)
          
      }
     
      html += `<tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>TOTAL</td>
      <td style='text-align:right'>${withoutTotal.toFixed(2)}</td>
      <td style="text-align:right;"></td>
      <td style='text-align:right'>${taxTotal.toFixed(2)}</td>
      <td></td>
      <td></td>
      </tr>`
      showData.innerHTML = html;
      },500);
    }
    


    //SEARCH FUNCTION
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    

    function monthFilter(value){
      console.log(value)
      var input, filter, table, tr, td, i, txtValue;
      input = value;
      filter = input;
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        //console.log(td)
        if (td) {
          txtValue = td.textContent || td.innerText;
          console.log(txtValue.slice(3,5))
          if (txtValue.slice(3,5).indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
        if(input == "all"){
          tr[i].style.display = "";
        }   
      }
      closeNav()
    }
    

    function myFunction() {
      let chooseVal = document.getElementById("choose")
      let choosedVal = parseInt(chooseVal.value);

      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[choosedVal];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }
