// import store from '@/store'
// import {analytics} from "@/firebase";
export default {
install(Vue) {

  // this is to help firebase data object convert to a usable array
  Vue.prototype.$objectToArray = function (originalArr, filterId, filterVal) {

      // process.env.NODE_ENV === "development" ? console.log('preflight $objectToArray', typeof originalArr, originalArr, filterId, filterVal) : null
      const loopArr = Object.keys(originalArr).map(async (arrItem) => {
        return originalArr[arrItem]
      });

      return Promise.all(loopArr).then(results => {
        // process.env.NODE_ENV === "development" ? console.log('results of loop', results) : null
        if(filterId != null || filterId != undefined){
          const filtered_results = results.filter(item => {
            return Object.entries(item).some(k => k[0].includes(filterId) && k[1] == filterVal)
          });
          return filtered_results
        }
        else{
          return results
        }

      });
  };


  // this is to help firebase data object convert to a usable array
  Vue.prototype.$isEmpty = function (obj, keyy) {
    if(keyy != undefined){
      return Object.hasOwnProperty.call(obj, keyy)
    }
    else{
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj,key))
        return false;
      }
      return true;
    }
  };


  // // this is to help firebase data object convert to a usable array
  // Vue.prototype.$stepPercentLeft = function (currentIndex, stepLength, seconds, currentTimestamp, nextTimestamp, duration) {
  //   let cleanSeconds =  Math.floor(seconds|0);
  //   let total = 0;
  //   let percent = 0;
  //   let durationTotal = this.$moment.duration(duration).asSeconds()
  //   // process.env.NODE_ENV === "development" ? console.log( currentIndex, currentTimestamp, nextTimestamp, stepLength ) : null;
  //   if(currentIndex+1 < stepLength && !isNaN(nextTimestamp)){
  //     total = nextTimestamp - currentTimestamp;
  //     percent = (((cleanSeconds-nextTimestamp) + total) / total)*100
  //     // console.log('total 1', cleanSeconds, total, (((cleanSeconds-nextTimestamp) + total) / total)*100);
  //   }
  //   else{
  //     total = durationTotal - currentTimestamp;
  //     percent = (((cleanSeconds-durationTotal) + total) / total)*100
  //     // console.log('total 2', cleanSeconds, durationTotal, total, (((cleanSeconds-durationTotal) + total) / total)*100);
  //   }
  //   return percent
  // };


  //
  //
  // // this is to help firebase data object convert to a usable array
  // Vue.prototype.$getDuration = function (durationString) {
  //   let duration = this.$moment.duration(durationString);
  //   let hours = Math.floor(duration.asHours()|0);
  //   let minutes = Math.floor(duration.asMinutes()|0);
  //   process.env.NODE_ENV === "development" ? console.log(  ) : null;
  //   let seconds = this.$moment().seconds(duration.asSeconds()).format('ss');
  //   // return `${hours}:${minutes}:${seconds}`;
  //   return this.$moment.duration(`${hours}:${minutes}:${seconds}`).humanize();
  // };

  // // this is to help firebase data object convert to a usable array
  // Vue.prototype.$getTimeFormat = function (secs) {
  //   // let duration = this.$moment.duration(durationString);
  //   // let hours = Math.floor(duration.asHours()|0);
  //   // let minutes = Math.floor(duration.asMinutes()|0);
  //   // process.env.NODE_ENV === "development" ? console.log(  ) : null;
  //   // let seconds = this.$moment().seconds(duration.asSeconds()).format('ss');
  //   // // return `${hours}:${minutes}:${seconds}`;
  //   // return this.$moment.duration(`${hours}:${minutes}:${seconds}`).humanize();
  //
  //   function pad(num) {
  //     return ("0"+num).slice(-2);
  //   }
  //   let mins = Math.floor(secs / 60);
  //   secs = secs%60;
  //   let hours = Math.floor(mins/60)
  //   mins = mins%60;
  //   return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
  //   // return pad(hours)+":"+pad(minutes)+":"+pad(secs); for old browsers
  //
  // };




  // Vue.prototype.$logEvent = function (action, data){
  //   return new Promise((resolve, reject) => {
  //
  //     process.env.NODE_ENV === "development" ? console.log( 'analytics...',  data) : analytics.logEvent(action, data);
  //     // Vue.analytics.logEvent(category, action, label)
  //   });
  // };

  // Vue.prototype.$logPage = function (category, action, label){
  //   return new Promise((resolve, reject) => {
  //     process.env.NODE_ENV === "development" ? console.log( 'analytics...',  category, action, label) : null;
  //     // $ga.event('category', 'action', 'label', 123)
  //     analytics.logEvent(action, {
  //       'event_category': category,
  //       'event_label': label,
  //       // 'value': <value>
  //     });
  //     // Vue.analytics.logEvent(category, action, label)
  //   });
  // };




  // // 1. add global method or property
  // Vue.myGlobalMethod = function () {
  //   // some logic ...
  // }

  // 2. add a global asset
  // Vue.directive('my-directive', {
  //   bind (el, binding, vnode, oldVnode) {
  //     // some logic ...
  //   }
  //   ...
  // })

  // 3. inject some component options
  // Vue.mixin({
  //   created: function () {
  //     // some logic ...
  //   }
  //   ...
  // })


  // Vue.mixin({
  //   data: function () {
  //     return {
  //       // some logic ...
  //
  //     }
  //   }
  // })



  // // 4. add an instance method
  // Vue.prototype.$myMethod = function (methodOptions) {
  //   // some logic ...
  // }
  }
}
