let hostBlockList = [
			/1rx/,
			/2checkout/,
			/2mdn/,
			/2o7/,
			/33across/,
			/3lift/,
			/4dsply/,
			/8m5sew59gr/,
			/a1749y92ai7h2uwi4v7e/,
			/abbp1/,
			/accmgr/,
			/(accounts|apis|cse|clients1|video).google/,
			/adap/,
/add?s?(advisor|blade|brn|roll|this|toany|form|grx|ition|kernel|lucent|mantx|nxs|rtx|s234|s345|safe|symptotic)/,
/add?s?(omik|search|sense|techus|vertising|x1|zerk)/,
			/adk2/,
			/adobed?tm/,
			/adsrvr/,
			/adtech/,
			/afy11/,
			/agkn/,
			/\bair\b/,
			/akamai(hd)?/,
			/akstat/,
			/alcmpn/,
			/alooma/,
			/amazon[-_]?adsystem/,
			/load.s3.amazonaws/,
			/amgdgt/,
			/ampproject/,
			/analytics.*(apple|msn|msnbc|twitter|yahoo|google|microsoft)/,
			/annalect/,
			/answerscloud/,
			/apester/,
			/app(dynamics|ier)/,
			/apxlv/,
			/areyouahuman/,
			/atdmt/,
			/atom[-_]?data/,
			/atsfi/,
			/attributionapp/,
			/atwola/,
			/autolinkmaker.itunes.apple/,
			/auto.search.msn/,
			/aweber/,
			/azureedge/,
			/b2rrns9dgbx56tf5kc/,
			/baidu/,
			/basebanner/,
			/baynote/,
			/bazaarvoice/,
			/bdex/,
			/beacon\./,
			/betrad/,
			/bf[-_]?ad/,
			/bidr/,
			/bidswitch/,
			/bildstatic/,
			/bing/,
			/bizographics/,
			/bizrate/,
			/bkrtx/,
			/bluecava/,
			/blueconic/,
			/bluekai/,
			/bnmla/,
			/bounceexchange/,
			/braintreegateway/,
			/branch/,
			/bridgetrack/,
			/brightcove/,
			/browser-update/,
			/\bt\b/,
			/btrll/,
			/bttrack/,
			/budgetedbauer/,
			/buysellads/,
			/c1exchange/,
			/carbonads/,
			/cardlytics/,
			/casalemedia/,
			/cbsi/,
			/cbsiinteractive/,
			/cbsistatic/,
			/cedexis/,
			/chango/,
			/chartbeat/,
			/choicestream/,
			/circularhub/,
			/click2sell/,
			/clickagy/,
			/clickequations/,
			/clksite/,
			/clrstm/,
			/cnevids/,
			/cnzz/,
			/cogocast/,
			/collective[-_]?media/,
			/company[-_]?target/,
			/comscore/,
			/condenastdigital/,
			/conductrics/,
			/connexity/,
			/consumertrack/,
			/contactimpact/,
			/context(ly|web)/,
			/convergetrack/,
			/conversionlogic/,
			/convertexperiments/,
			/convertkit/,
			/coresecure/,
			/cpx/,
			/crazyegg/,
			/creditcards/,
			/crispadvertising/,
			/crisppremium/,
			/criteo/,
			/crsspxl/,
			/crwdcntrl/,
			/csdata1/,
			/(csi|fonts|metrics?).gstatic/,
			/ctnsnet/,
			/d1z2jf7jlzjs58.cloudfront/,
			/d26t7ex48mr4bn.cloudfront/,
			/d2q79iu7y748jz.cloudfront/,
			/d31qbv1cthcecs.cloudfront/,
			/d37sfqor0g25ph.cloudfront/,
			/d3qxwzhswv93jk.cloudfront/,
			/d5nxst8fruw4z.cloudfront/,
			/d8rk54i4mohrb.cloudfront/,
			/dc8xl0ndzn2cb.cloudfront/,
			/d3c3cq33003psk.cloudfront/,
			/daddyanalytics/,
			/decenthat/,
			/demandbase/,
			/demdex/,
			/deployads/,
			/developermedia/,
			/dff7tx5c2qbxc.cloudfront/,
			/df[-_]?srv/,
			/dianomi/,
			/digg/,
			/discourse[-_]?cdn[-_]?sjc1/,
			/disqus/,
			/disquscdn/,
			/districtm/,
			/dmtracker/,
			/dmtry/,
			/dnkzzz1hlto79.cloudfront/,
			/dnn506yrbagrg.cloudfront/,
			/domdex/,
			/do[-_]?not[-_]?tracker?/,
			/double[-_]?click(bygoogle)?/,
			/doubleverify/,
			/dp8hsntg6do36.cloudfront/,
			/dpclk/,
			/dpmsrv/,
			/dwgyu36up6iuz.cloudfront/,
			/dwum8argi892z.cloudfront/,
			/dy48bnzanqw0v.cloudfront/,
			/dynamicyield/,
			/edigitalsurvey/,
			/effectivemeasure/,
			/eloqua/,
			/embedly/,
			/emetriq/,
			/en25/,
			/ensighten/,
			/eviltracker/,
			/exelator/,
			/exponential/,
			/eyeota/,
			/eyereturn/,
			/eyeviewads/,
			/facebook/,
			/fallingfalcon/,
			/fastclick/,
			/fastly/,
			/fbcdn/,
			/flashtalking/,
			/flite/,
			/(fls[-_]?na)?.amazon(aws|trust)/,
			/fonts/,
			/footprint/,
			/[^(?:work|sales)]for(ce|esee)/,
			/fqtag/,
			/fullstory/,
			/future[-_]?hawk[-_]?content/,
			/fwmrm/,
			/(s|g|a)fx/,
			/fyre/,
			/gannett[-_]?cdn/,
			/gemius/,
			/geni/,
			/geovisite/,
			/getdrip/,
			/gff6166tdt2i4fc155zi11/,
			/gfx/,
			/ggpht/,
			/gigya/,
			/gleam/,
			/globalwebindex/,
			/\.go\./,
			/go[-_]?mpulse/,
			/googlead(services|syndication)/,
			/google[-_]?analytics/,
			/google(apis|code|commerce|syndication|user)/,
			/googletag(manager|services)/,
			/goroost/,
			/govdelivery/,
			/gravatar/,
			/grvcdn/,
			/gscontxt/,
			/gtrk.s3.amazonaws/,
			/gumgum/,
			/gwallet/,
			/h[-_]?bid/,
			/haleymarketing/,
			/heatmap/,
			/hellobar/,
			/hfc195b/,
			/hlserve/,
			/hotjar/,
			/hrnorth/,
			/hs[-_]?(analytics|forms|scripts?)/,
			/hubspot/,
			/hupso/,
			/iab/,
			/iasds01/,
			/ib[-_]?ibi/,
			/ibpxl/,
			/ibsrv/,
			/idealmedia/,
			/img.webmd/,
			/imrworldwide/,
			/imshopping/,
			/inbenta/,
			/indeed/,
			/indexww/,
			/infolinks/,
			/informars/,
			/infusionsoft/,
			/innovid/,
			/insightexpressai/,
			/inspectlet/,
			/instinctiveads/,
			/intercom(assets)?/,
			/interstateanalytics/,
			/ioam/,
			/ip(2map|owow|redictive)/,
			/iris/,
			/ixiaa/,
			/jiathis/,
			/jivox/,
			/jsonip/,
			/jsrdn/,
			/jumptap/,
			/kampyle/,
			/keen/,
			/ketchuponnews/,
			/keywee/,
			/keywordblocks/,
			/kinja[-_]?(static)?/,
			/kiosked/,
			/kissmetrics/,
			/kixer/,
			/komoona/,
			/krxd/,
			/kxcdn/,
			/launchbit/,
			/lexity/,
			/lifefyre/,
			/m.lifehack/,
			/lifestreet/,
			/lijit/,
			/listrakbi/,
			/litix/,
			/live(chatinc|person|rail)/,
			/llnwd/,
			/lnk/,
			/localytics/,
			/lpsnmedia/,
			/lrcdn/,
			/m2/,
			/mailmunch/,
			/marketo/,
			/mather/,
			/mathtag/,
			/maxmind/,
			/maxymiser/,
			/mdotlabs/,
			/mdotm/,
			/media(voice|wallahscript|6degrees)/,
			/media.business.spectrum/,
			/mentad/,
			/telemetry.microsoft/,
			/minute/,
			/misosoup/,
			/mixpanel/,
			/mkt61/,
			/ml314/,
			/ml[-_]?api/,
			/ml-attr/,
			/mnet[-_]?ad/,
			/moatads/,
			/monetate/,
			/mookie1/,
			/mouseflow/,
			/mparticle/,
			/mpeasylink/,
			/msadcenter.msn/,
			/msgfocus/,
			/mxptint/,
			/myfinance/,
			/myvisualiq/,
			/nativeads/,
			/netdna[-_]?ssl/,
			/netmng/,
			/netseer/,
			/newrelic/,
			/newsinc/,
			/nexac/,
			/nile/,
			/npttech/,
			/nr[-_]?data/,
			/ntv/,
			/nuggad/,
			/olark/,
			/omniture/,
			/omtrdc/,
			/one(signal|statfree|store)/,
			/onscroll/,
			/ooyala/,
			/opendsp/,
			/openx/,
			/opta/,
			/optimahub/,
			/optimizely/,
			/optnmstr/,
			/outbrain/,
			/owneriq/,
			/pagefair/,
			/pages03/,
			/pardot/,
			/parsely/,
			/partyfactory/,
			/peer39/,
			/perfectaudience/,
			/perfectmarket/,
			/perimeterx/,
			/petametrics/,
			/assets.pintrest/,
			/[^(?:shop|va)]ping(dom)?/,
			/pippio/,
			/pixel/,
      			/placemytag/,
			/platform.instagram/,
			/platform.linkedin/,
			/platform.twitter/,
			/playbuzz/,
			/plista/,
			/\.po\./,
			/ads.pof/,
			/polarmobile/,
			/post(affiliatepro|release)/,
			/ppjol/,
			/prfct/,
			/pricegrabber/,
			/profile.ams50.cloudfront/,
			/pro[-_]?market/,
			/pub(exchange|matic|mine|nation)/,
			/push(crew|engage)/,
			/qmerce/,
			/qualtrics/,
			/quant(count|server?)/,
			/questionmarket/,
			/raasnet/,
			/rackcdn/,
			/rapidscansecure/,
			/rapleaf/,
			/raygun/,
			/rd.about/,
			/realvu/,
			/recruitics/,
			/reson8/,
			/revcontent/,
			/revsci/,
			/rfihub/,
			/rlcdn/,
			/roq/,
			/ru4/,
			/rubiconproject/,
			/rundsp/,
			/rutarget/,
			/rvty/,
			/s3.amazonaws/,
			/sail[-_]?horizon/,
			/sascdn/,
			/sbal4kp/,
			/scanscout/,
			/scorecardresearch/,
			/scroll/,
			/searchlinks/,
			/securedvisit/,
			/securemetrics.apple/,
			/sele/,
			/selectablemedia/,
			/serimon/,
			/servedby-buysellads/,                
			/servedbyopenx/,
			/services.visualstudio/,
			/serving[-_]?sys/,
			/sharethis/,
			/sharethrough/,
			/shinystat/,
			/siftscience/,
			/simplereach/,
			/simpli/,
			/site(improveanalytics|lock|meter|scout)/,
			/skimresources/,
			/skyword/,
			/sleeknote/,
			/smaato/,
			/smart(adserver|clip)/,
			/sonobi/,
			/sovrn/,
			/speedcurve/,
			/spongecell/,
			/spot(ad|e?xchange)/,
			/springserve/,
			/sprinkletxt/,
			/stackcommerce/,
			/stats?(counter|event)/,
			/static(stuff|world)/,
			/statuspage/,
			/summerhamster/,
			/sumo(me)?/,
			/sundaysky/,
			/supersonicads/,
			/survata/,
			/surveymonkey/,
			/swiftype(cdn)?/,
			/switchadhub/,
			/swoop/,
			/taboola/,
			/tailsweep/,
			/tapad/,
			/tealiumiq/,
			/techhive/,
			/tekblue/,
			/temnos/,
			/theadex/,
			/thebrighttag/,
			/theplatform/,
			/tidaltv/,
			/tingyun/,
			/tinypass/,
			/tiqcdn/,
			/tns[-_]?counter/,
			/townnews/,
			/trackersimulator/,
			/trafficjunky/,
			/travelaudience/,
			/tribalfusion/,
			/tribdss/,
			/trbas/,
			/troncdata/,
			/tru(optik|ste\.)/,
			/tubemogul/,
			/turn/,
			/twimg/,
			/tynt/,
			/typekit/,
			/undertone/,
			/univide/,
			/unpkg/,
			/urbanairship/,
			/usabilla/,
			/usemessages/,
			/user(echo|zoom)/,
			/uts-af/,
			/vgwort/,
			/sitefinder.verisign/,
			/video(amp|hub)/,
			/vidible/,
			/vidora/,
			/viglink/,
			/vindicosuite/,
			/visiblemeasures/,
			/visual(dna|revenue|websiteoptimizer)/,
			/vmweb/,
			/voicefive/,
			/volvelle/,
			/w3counter/,
			/w55c/,
			/webfont/,
			/weborama/,
			/webtrends/,
			/wishabi/,
			/workey/,
			/wraug5vv72b28fch/,
			/(stats)\.wp/,
			/wt1/,
			/wtp101/,
			/xad/,
			/xg4ken/,
			/xpanama/,
			/xplosion/,
			/yadro/,
			/(bc|query).yahoo/,
			/yield(ify|lab|mo|optimizer|partners|select)?/,
			/yimg/,
			/yldbt/,
			/youbora/,
			/youtubei.youtube/,
			/youtube-nocookie/,
			/ytimg/,
			/yume/,
			/zdbb/,
			/zemanta/,
			/zendesk/,
			/zergnet/,
			/ziff(davis|static|prod)/,
			/zqtk/
];

let pathBlockList = [
				/1920x1080/i,
				/=1920[^0-9]+/i,
				/=1080[^0-9]+/i,
				/\.woff/i,
				/[^(?:cata|b)]][-_]?logs/i,
				/\bads\b/i,
/[^(?:downlo)]ads?[-_]?(2|block|allowed|channel|exchange|farm|fuel|net|request|sprite|sense|server|radar|type|units?|url|vagg|vertisement|vertising|zone)/i,
				/(async|instream|page|pub|show|sidebar)[-_]?ads?/i,
				/ads[-_]?by[-_]?google/i,
				/advert/i,
				/analytics/i,
				/autoptimize/i,
				/boomerang/i,
				/branding/i,
				/browser[-_]?metrics/i,
				/beacon/i,
				/callback/i,
				/campaign/i,
				/cardlytics/i,
				/cedexis/i,
				/choptimize/i,
				/clicktrack/i,
				/(info)?cookie.*js/i,
				/coremetrics/i,
				/count[-_]?data/i,
				/csi[-_]?204/i,
				/double.*ssl/i,
				/dynatrace/i,
				/eluminate/i,
				/embeds/i,
				/eventtrack/i,
				/facebook/i,
				/fingerprint/i,
				/font[-_]?awesome/i,
				/gen(erate)?[-_]?204/i,
				/getcustom(er)?offers/i,
				/get[-_]?midroll[-_]?info/i,
				/get[-_]?video[-_]?info/i,
				/get[-_]?video[-_]?metadata/i,
				/googleads/i,
				/impression/i,
				/infocookie/i,
				/insights/i,
				/\/js\/bg\//i,
				/waypoints?/i,
				/leadpages?/i,
				/log[-_]?(event|interaction)/i,
				/omniture/i,
				/optimizely/i,
				/mac[-_]?204/i,
				/metrics/i,
				/metrika/i,
				/modernizr/i,
				/monitors?(ing)/i,
				/mpulse/i,
				/nexusclient/i,
				/outbrain/i,
				/page[-_]?(view|timings?)/i,
				/[^(?:shop|va)]ping/i,
				/pixel/i,
				/player[-_]?204/i,
				/pre[-_]?bid/i,
				/ptracking/i,
				/radar/i,
				/ratrk/i,
				/recaptcha/i,
				/referr?er/i,
				/retargeting/i,
				/(b|dc|wp)rum/i,
				/rum[-_]?track(ers?|ing)?/i,
				/scframework/i,
				/stats/i,
				/statistics/i,
				/syndication/i,
				/watch[-_]?(autoplayrenderer|fragments)/i,
				/woocommerce/i,
				/www[-_]?tampering/i,
				/tagging/i,
				/targeting/i,
				/timings/i,
				/trackclick/i,
				/track(ers?|ing)?.*js/i,
				/videogoodput/i,
				/webfont/i,
				/webtrends/i

];

let fullUrlWhiteList = [
	/https:\/\/stackoverflow\.com\/questions\/\d+\//,
	/https:\/\/\w{2,3}-{3}\w{2}-\w{8}\.googlevideo\.com\/videoplayback/
];

let hostWhiteList = [
	/wikipedia/
];

let pathWhiteList = [
	/\.css$/,
	/jquery\.(min\.)?js$/
];


function matchTest(site, list) {
	for(let i in list) {
		if(list[i].test(site)) {
			alert("TRIGGER: " + list[i].toString());
			return true;
		}
	}
	return false;
}

function dnsDirect(url) {
	alert("DIRECT: " + url.toString());
	return "DIRECT";
}

function FindProxyForURL(url, host) {
	let path = url.replace(/https?:\/\//, '').replace(host, '');

	if(matchTest(url, fullUrlWhiteList) || 
	   matchTest(host, hostWhiteList)   || 
	   matchTest(path, pathWhiteList))  { 
		return dnsDirect(url);
	}

	if(matchTest(host, hostBlockList)  || 
	   matchTest(path, pathBlockList)) {
		alert("BLOCKED: " + url.toString());
		return "PROXY 127.0.0.1:0000";
	}
	
	return dnsDirect(url);
}

