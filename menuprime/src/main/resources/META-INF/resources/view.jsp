<%@ include file="/init.jsp" %>

<link rel="stylesheet" type="text/css" href="/o/menuprime/node_modules/font-awesome@4.7.0/css/font-awesome.min.css"/> <!-- escape from the <link> -->
<link rel="stylesheet" type="text/css" href="/o/menuprime/node_modules/primeng-wl@5.2.1-SNAPSHOT6/resources/themes/omega/theme.css"/>
<link rel="stylesheet" type="text/css" href="/o/menuprime/node_modules/primeng-wl@5.2.1-SNAPSHOT6/resources/primeng.min.css"/>

<div id="<portlet:namespace />"></div>
<base href="/">
<aui:script require="menuprime@1.0.0">
	menuprime100.default('#<portlet:namespace />');
</aui:script>