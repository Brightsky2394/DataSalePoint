function GetAmount() {
    var strDataBundle=document.getElementById('cboDataBundle').value;
    var strDataSpeed=document.getElementById('cboDataSpeed').value;
    var strMobileNetwork=document.getElementById('cboMobileNetwork').value;

    var cboDataBundle=document.getElementById('cboDataBundle');
    cboDataBundle.length=0;

    if (strMobileNetwork=="MTN")
    {	
        document.getElementById('lblDataSpeed').style.display="none";document.getElementById('cboDataSpeed').style.display="none";
        document.getElementById('lblDiscount').style.display="";document.getElementById('lblDiscount').innerHTML='[3.5% Discount]';
        if (''=='')
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='[FreeMember:3%][UpgradedMember:3.5%]';	
        }
        else
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='';	
        }							
        

    
        opt = document.createElement('option');
        opt.value = "1";opt.innerHTML = "50 MB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "3";opt.innerHTML = "150 MB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);			
        
        opt = document.createElement('option');
        opt.value = "7";opt.innerHTML = "250 MB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);			        

        opt = document.createElement('option');
        opt.value = "2";opt.innerHTML = "500 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "35";opt.innerHTML = "500 MB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);	   		    
        
        opt = document.createElement('option');
        opt.value = "4";opt.innerHTML = "1 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "36";opt.innerHTML = "1 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "5";opt.innerHTML = "2 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	 
        
        opt = document.createElement('option');
        opt.value = "37";opt.innerHTML = "2 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);		    
        
        opt = document.createElement('option');
        opt.value = "6";opt.innerHTML = "3 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "38";opt.innerHTML = "3 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);		    
                                
        opt = document.createElement('option');
        opt.value = "8";opt.innerHTML = "5 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "39";opt.innerHTML = "5 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt); 
                    
        opt = document.createElement('option');
        opt.value = "13";opt.innerHTML = "10 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "40";opt.innerHTML = "10 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);	  
        
        opt = document.createElement('option');
        opt.value = "9";opt.innerHTML = "15 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "10";opt.innerHTML = "20 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);		
        
        opt = document.createElement('option');
        opt.value = "11";opt.innerHTML = "25 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);	    
        
        opt = document.createElement('option');
        opt.value = "12";opt.innerHTML = "50 GB - 30 days (Corporate)";
        cboDataBundle.appendChild(opt);			    

    }
    else if (strMobileNetwork=="Etisalat")
    {				
        document.getElementById('lblDataSpeed').style.display="none";document.getElementById('cboDataSpeed').style.display="none";
        document.getElementById('lblDiscount').style.display="";document.getElementById('lblDiscount').innerHTML='[6.5% Discount]';
        if (''=='')
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='[FreeMember:6%][UpgradedMember:6.5%]';				
        }
        else
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='';	
        }						

        opt = document.createElement('option');
        opt.value = "1";opt.innerHTML = "50 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "2";opt.innerHTML = "100 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "3";opt.innerHTML = "300 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	  
        
        opt = document.createElement('option');
        opt.value = "4";opt.innerHTML = "500 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
                                                
        opt = document.createElement('option');
        opt.value = "5";opt.innerHTML = "1 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
                    
        opt = document.createElement('option');
        opt.value = "6";opt.innerHTML = "2 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  	
        
        opt = document.createElement('option');
        opt.value = "7";opt.innerHTML = "3 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "8";opt.innerHTML = "4 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "9";opt.innerHTML = "5 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "10";opt.innerHTML = "10 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "11";opt.innerHTML = "15 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	    
        
        opt = document.createElement('option');
        opt.value = "12";opt.innerHTML = "20 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "13";opt.innerHTML = "25 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);		    
        
                                        
        opt = document.createElement('option');
        opt.value = "14";opt.innerHTML = "500 MB - 3 days (Direct)";
        cboDataBundle.appendChild(opt);		    
        
        opt = document.createElement('option');
        opt.value = "15";opt.innerHTML = "1.536 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "16";opt.innerHTML = "2.048 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);			    	    
                                
        opt = document.createElement('option');
        opt.value = "18";opt.innerHTML = "4.608 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "17";opt.innerHTML = "7.168 GB - 10 days (Direct)";//"7 GB - 7 days" //3 GB - 30 days
        cboDataBundle.appendChild(opt);		    		    
                    
        opt = document.createElement('option');
        opt.value = "19";opt.innerHTML = "11.264 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);		    
        
        opt = document.createElement('option');
        opt.value = "20";opt.innerHTML = "15.36 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);		    

        opt = document.createElement('option');
        opt.value = "21";opt.innerHTML = "40.96 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);	

        opt = document.createElement('option');
        opt.value = "22";opt.innerHTML = "76.80 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);		    	    	    
    }
    else if (strMobileNetwork=="AirTel")
    {	

        document.getElementById('lblDataSpeed').style.display="none";document.getElementById('cboDataSpeed').style.display="none";
        document.getElementById('lblDiscount').style.display="";document.getElementById('lblDiscount').innerHTML='[3.5% Discount]';
        if (''=='')
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='[FreeMember:3%][UpgradedMember:3.5%]';				
        }
        else
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='';	
        }	
                                
        opt = document.createElement('option');
        opt.value = "1";opt.innerHTML = "100 MB - 7 days (SME)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "2";opt.innerHTML = "300 MB - 7 days (SME)";
        cboDataBundle.appendChild(opt);	
        
        opt = document.createElement('option');
        opt.value = "3";opt.innerHTML = "500 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);	  
        
        opt = document.createElement('option');
        opt.value = "4";opt.innerHTML = "1 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
                                                
        opt = document.createElement('option');
        opt.value = "5";opt.innerHTML = "2 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
                    
        opt = document.createElement('option');
        opt.value = "6";opt.innerHTML = "5 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  	
        
        opt = document.createElement('option');
        opt.value = "7";opt.innerHTML = "10 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "8";opt.innerHTML = "15 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "9";opt.innerHTML = "20 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 
            
                   
        opt = document.createElement('option');
        opt.value = "15";opt.innerHTML = "100 MB - 1 day (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "16";opt.innerHTML = "200 MB - 3 days (Direct)";
        cboDataBundle.appendChild(opt);		    
        
        opt = document.createElement('option');
        opt.value = "17";opt.innerHTML = "350 MB - 7 days (Direct)";
        cboDataBundle.appendChild(opt);

        opt = document.createElement('option');
        opt.value = "19";opt.innerHTML = "750 MB - 14 days (Direct)";
        cboDataBundle.appendChild(opt);
                   
        opt = document.createElement('option');
        opt.value = "18";opt.innerHTML = "1 GB - 1 day (Direct)";
        cboDataBundle.appendChild(opt);		

        opt = document.createElement('option');
        opt.value = "21";opt.innerHTML = "1.5 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);	    
                    
        opt = document.createElement('option');
        opt.value = "20";opt.innerHTML = "2 GB - 1 day (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "22";opt.innerHTML = "2 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "23";opt.innerHTML = "3 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "25";opt.innerHTML = "4.5 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);		    		    
        
        opt = document.createElement('option');
        opt.value = "24";opt.innerHTML = "6 GB - 7 days (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "26";opt.innerHTML = "6 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);
        
        opt = document.createElement('option');
        opt.value = "27";opt.innerHTML = "10 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "28";opt.innerHTML = "11 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "29";opt.innerHTML = "20 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "30";opt.innerHTML = "40 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "31";opt.innerHTML = "75 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt); 
        
        opt = document.createElement('option');
        opt.value = "32";opt.innerHTML = "120 GB - 30 days (Direct)";
        cboDataBundle.appendChild(opt); 
        
    }	
    else if (strMobileNetwork=="GLO")
    {			
        document.getElementById('lblDataSpeed').style.display="none";document.getElementById('cboDataSpeed').style.display="none";
        document.getElementById('lblDiscount').style.display="";document.getElementById('lblDiscount').innerHTML='[8% Discount]';
        if (''=='')
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='[FreeMember:7.5%][UpgradedMember:8%]';				
        }
        else
        {
            document.getElementById('lblDiscount2').style.display="";document.getElementById('lblDiscount2').innerHTML='';	
        }
        
        opt = document.createElement('option');
        opt.value = "1";opt.innerHTML = "200 MB - 14 days (SME)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "2";opt.innerHTML = "500 MB - 30 days (SME)";
        cboDataBundle.appendChild(opt);   	
        
        opt = document.createElement('option');
        opt.value = "3";opt.innerHTML = "1 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt); 	
        
        opt = document.createElement('option');
        opt.value = "4";opt.innerHTML = "2 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "5";opt.innerHTML = "3 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);  
        
        opt = document.createElement('option');
        opt.value = "6";opt.innerHTML = "5 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);		
        
        opt = document.createElement('option');
        opt.value = "7";opt.innerHTML = "10 GB - 30 days (SME)";
        cboDataBundle.appendChild(opt);    		    
     }	
     else if (strMobileNetwork=="smile-direct")
     {
        location.href="BuySmile.asp";
     }
     else if (strMobileNetwork=="spectranet")
     {
        location.href="BuySpectranet.asp";
     }		 		 	
    
    GetAmount2();		
}

function GetAmount2()
{
    var strDataBundle=document.getElementById('cboDataBundle').value;
    var strMobileNetwork=document.getElementById('cboMobileNetwork').value;
    
    if (strDataBundle=='1')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='11';
        else if (strMobileNetwork=='AirTel')
            strPrice='26';
        else if (strMobileNetwork=='MTN')
            strPrice='16';
        else if (strMobileNetwork=='GLO')
            strPrice='50';
    }
    if (strDataBundle=='2')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='18';
        else if (strMobileNetwork=='AirTel')
            strPrice='70';
        else if (strMobileNetwork=='MTN')
            strPrice='119';
        else if (strMobileNetwork=='GLO')
            strPrice='119';
    }				 
    if (strDataBundle=='3')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='46';
        else if (strMobileNetwork=='AirTel')
            strPrice='114';
        else if (strMobileNetwork=='MTN')
            strPrice='40';
        else if (strMobileNetwork=='GLO')
            strPrice='230';
    }		
    if (strDataBundle=='4') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='79';
        else if (strMobileNetwork=='AirTel')
            strPrice='220';
        else if (strMobileNetwork=='MTN')
            strPrice='230';
        else if (strMobileNetwork=='GLO')
            strPrice='460';
    }	
    if (strDataBundle=='5') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='140';
        else if (strMobileNetwork=='AirTel')
            strPrice='440';
        else if (strMobileNetwork=='MTN')
            strPrice='460';
        else if (strMobileNetwork=='GLO')
            strPrice='690';
    }	
    if (strDataBundle=='6') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='280';
        else if (strMobileNetwork=='AirTel')
            strPrice='1100';
        else if (strMobileNetwork=='MTN')
            strPrice='690';
        else if (strMobileNetwork=='GLO')
            strPrice='1150';
    }	
    if (strDataBundle=='7') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='420';
        else if (strMobileNetwork=='AirTel')
            strPrice='2200';
        else if (strMobileNetwork=='MTN')
            strPrice='64';
        else if (strMobileNetwork=='GLO')
            strPrice='2300';
    }
    if (strDataBundle=='8') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='560';
        else if (strMobileNetwork=='AirTel')
            strPrice='3300';
        else if (strMobileNetwork=='MTN')
            strPrice='1150';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='9') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='700';
        else if (strMobileNetwork=='AirTel')
            strPrice='4400';
        else if (strMobileNetwork=='MTN')
            strPrice='3395';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }		
    if (strDataBundle=='10') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='1400';
        else if (strMobileNetwork=='AirTel')
            strPrice='3500';
        else if (strMobileNetwork=='MTN')
            strPrice='4650';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }		
    if (strDataBundle=='11') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='2100';
        else if (strMobileNetwork=='AirTel')
            strPrice='4000';
        else if (strMobileNetwork=='MTN')
            strPrice='5825';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }	
    if (strDataBundle=='12') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='2800';
        else if (strMobileNetwork=='AirTel')
            strPrice='4500';
        else if (strMobileNetwork=='MTN')
            strPrice='11500';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }	
    if (strDataBundle=='13') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='3500';
        else if (strMobileNetwork=='AirTel')
            strPrice='5000';
        else if (strMobileNetwork=='MTN')
            strPrice='2300';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='14') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='467.5';
        else if (strMobileNetwork=='AirTel')
            strPrice='48.24';				
        else if (strMobileNetwork=='MTN')
            strPrice='96.5';
        else if (strMobileNetwork=='GLO')
            strPrice='920';													
    }	
    if (strDataBundle=='15') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='935';
        else if (strMobileNetwork=='AirTel')
            strPrice='95.54';				
        else if (strMobileNetwork=='MTN')
            strPrice='193';
        else if (strMobileNetwork=='GLO')
            strPrice='1840';												
    }	
    if (strDataBundle=='16') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='1122';
        else if (strMobileNetwork=='AirTel')
            strPrice='192.06';				
        else if (strMobileNetwork=='MTN')
            strPrice='289.5';
        else if (strMobileNetwork=='GLO')
            strPrice='2300';								
    }		
    if (strDataBundle=='17') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='1402.5';
        else if (strMobileNetwork=='AirTel')
            strPrice='288.55';				
        else if (strMobileNetwork=='MTN')
            strPrice='289.5';
        else if (strMobileNetwork=='GLO')
            strPrice='2760';							
    }	
    if (strDataBundle=='18') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='1870';
        else if (strMobileNetwork=='AirTel')
            strPrice='288.56';				
        else if (strMobileNetwork=='MTN')
            strPrice='482.5';
        else if (strMobileNetwork=='GLO')
            strPrice='3680';								
    }	
    if (strDataBundle=='19') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='3740';
        else if (strMobileNetwork=='AirTel')
            strPrice='481.54';				
        else if (strMobileNetwork=='MTN')
            strPrice='482.5';
        else if (strMobileNetwork=='GLO')
            strPrice='4600';								
    }
    if (strDataBundle=='20') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='4675';
        else if (strMobileNetwork=='AirTel')
            strPrice='481.56';				
        else if (strMobileNetwork=='MTN')
            strPrice='482.5';
        else if (strMobileNetwork=='GLO')
            strPrice='7360';					
    }
    if (strDataBundle=='21') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='9350';
        else if (strMobileNetwork=='AirTel')
            strPrice='964.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='1447.5';
        else if (strMobileNetwork=='GLO')
            strPrice='13800';					
    }														
    if (strDataBundle=='22') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='14025';
        else if (strMobileNetwork=='AirTel')
            strPrice='1157.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='965';
        else if (strMobileNetwork=='GLO')
            strPrice='16560';					
    }
    if (strDataBundle=='23') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='1446.54';				
        else if (strMobileNetwork=='MTN')
            strPrice='1158';
        else if (strMobileNetwork=='GLO')
            strPrice='18400';					
    }
    if (strDataBundle=='24') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='1446.56';				
        else if (strMobileNetwork=='MTN')
            strPrice='1930';
        else if (strMobileNetwork=='GLO')
            strPrice='9200';					
    }
    if (strDataBundle=='25') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='1929.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='2412.5';
        else if (strMobileNetwork=='GLO')
            strPrice='460';					
    }			
    if (strDataBundle=='26') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='2411.54';				
        else if (strMobileNetwork=='MTN')
            strPrice='3377.5';
        else if (strMobileNetwork=='GLO')
            strPrice='184';					
    }					
    if (strDataBundle=='27') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='2894.05';				
        else if (strMobileNetwork=='MTN')
            strPrice='2895';
        else if (strMobileNetwork=='GLO')
            strPrice='23';					
    }
    if (strDataBundle=='28') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='3859.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='4825';
        else if (strMobileNetwork=='GLO')
            strPrice='46';					
    }
    if (strDataBundle=='29') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='4824.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='9650';
        else if (strMobileNetwork=='GLO')
            strPrice='92';					
    }
    if (strDataBundle=='30') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='9649.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='14475';
        else if (strMobileNetwork=='GLO')
            strPrice='184';					
    }
    if (strDataBundle=='31') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='14474.04';				
        else if (strMobileNetwork=='MTN')
            strPrice='19300';
        else if (strMobileNetwork=='GLO')
            strPrice='4600';					
    }
    if (strDataBundle=='32') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='19299.05';				
        else if (strMobileNetwork=='MTN')
            strPrice='1447.5';
        else if (strMobileNetwork=='GLO')
            strPrice='460';					
    }
    if (strDataBundle=='33') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';				
        else if (strMobileNetwork=='MTN')
            strPrice='5790';
        else if (strMobileNetwork=='GLO')
            strPrice='';					
    }
    if (strDataBundle=='34') 
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';				
        else if (strMobileNetwork=='MTN')
            strPrice='19770.27';
        else if (strMobileNetwork=='GLO')
            strPrice='';					
    }	
    if (strDataBundle=='35')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';
        else if (strMobileNetwork=='MTN')
            strPrice='124';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='36')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';
        else if (strMobileNetwork=='MTN')
            strPrice='235';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='37')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';
        else if (strMobileNetwork=='MTN')
            strPrice='470';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='38')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';
        else if (strMobileNetwork=='MTN')
            strPrice='705';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='39')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';
        else if (strMobileNetwork=='MTN')
            strPrice='1175';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }
    if (strDataBundle=='40')
    { 
        if (strMobileNetwork=='Etisalat')
            strPrice='';
        else if (strMobileNetwork=='AirTel')
            strPrice='';
        else if (strMobileNetwork=='MTN')
            strPrice='2350';
        else if (strMobileNetwork=='GLO')
            strPrice='';
    }																											
        
    var myID='';							
    var mystrScriptStoreName='';
    var myMembershipLevel='';
    
    //var n = myMemberStatus1.indexOf('REE');
    if (myID!='' && mystrScriptStoreName=='' && myMembershipLevel=='')
    {		
        //document.getElementById('txtAmount').value=strPrice*1.005;
        document.getElementById('txtAmount').value=strPrice;
    }
    else
    {
        document.getElementById('txtAmount').value=strPrice;
    }
}