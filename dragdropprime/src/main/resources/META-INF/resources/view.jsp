<%@ include file="/init.jsp" %>

<link rel="stylesheet" type="text/css" href="/o/dragdropprime/node_modules/font-awesome@4.7.0/css/font-awesome.min.css"/> <!-- escape from the <link> -->
<link rel="stylesheet" type="text/css" href="/o/dragdropprime/node_modules/primeng-wl@5.2.1-SNAPSHOT6/resources/themes/omega/theme.css"/>
<link rel="stylesheet" type="text/css" href="/o/dragdropprime/node_modules/primeng-wl@5.2.1-SNAPSHOT6/resources/primeng.min.css"/>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmnEbqsea0dTLV4KvWrQ_c6dwgfRWjzk4"></script>

<div id="<portlet:namespace />"></div>

<base href="/">
<aui:script require="dragdropprime@1.0.0">
	dragdropprime100.default('#<portlet:namespace />');
</aui:script>