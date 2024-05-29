import { Component } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {


  generatePDF(){
    const elementToPrint:any = document.getElementById('PD');
    html2canvas(elementToPrint, {scale:2}).then((canvas)=>{
     const pdf = new jsPDF();
     pdf.addImage(canvas.toDataURL('image/pdf'), 'PDF', -95, 5, 400,285);
     pdf.setFontSize(22);
     pdf.setProperties({
        title:  'Certicate',

    });
     pdf.save('certificate.pdf');
    });
  }


}