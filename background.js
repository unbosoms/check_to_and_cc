messenger.compose.onBeforeSend.addListener(
  async (tab, details) => {

    let ok_domain = '@example.com';
    let to_array = details.to;
    let cc_array = details.cc;

    // count the number of mail addresses in to
    let to_digi_size = 0;
    let to_othr_size = 0;
    for(let i=0; i<to_array.length; i++){
      if(to_array[i].endsWith(ok_domain)){
        to_digi_size++;
      }else{
        to_othr_size++;
      }
    }

    // count the number of mail addresses in cc
    let cc_digi_size = 0;
    let cc_othr_size = 0;
    for(let i=0; i<cc_array.length; i++){
      if(cc_array[i].endsWith(ok_domain)){
        cc_digi_size++;
      }else{
        cc_othr_size++;
      }
    }

    // for debug
    console.log('# of to(digitech) is '+to_digi_size);
    console.log('# of to(other) is '+to_othr_size);
    console.log('# of cc(digitech) is '+cc_digi_size);
    console.log('# of cc(other) is '+cc_othr_size);

    // check the number of mail address that is not the domain of digitech-ymg.org
    if(to_othr_size>0 || cc_othr_size>0){
      console.log('Canceled.'); // for debug
      return {cancel: true};
    }else{
      console.log('OK to send.'); // for debug
    }
  }
)
