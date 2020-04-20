(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{436:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"azure-service-bus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#azure-service-bus"}},[s._v("#")]),s._v(" Azure Service Bus")]),s._v(" "),e("p",[s._v("Azure Service Bus allows the enqueue time of a message to be specified, making it possible to schedule messages without the use of a separate message scheduler. MassTransit makes it easy to take advantage of this feature by configuring the bus scheduler to specify the enqueue time for scheduled messages.")]),s._v(" "),e("h3",{attrs:{id:"configuring-the-enqueue-time-scheduler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-enqueue-time-scheduler"}},[s._v("#")]),s._v(" Configuring the enqueue time scheduler")]),s._v(" "),e("p",[s._v("To configure the bus (or a receive endpoint) to use the enqueue time for message scheduling, add the code below to the configuration.")]),s._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" busControl "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Factory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreateUsingAzureServiceBus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cfg "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" host "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cfg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serviceAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    cfg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("UseServiceBusMessageScheduler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("This configures the bus scheduler, which is available via the MessageSchedulerContext interface. Once configured, the message scheduling extensions can be used (which are available on the ConsumeContext). For example, to schedule a message for future delivery from within a message consumer.")]),s._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ScheduleNotificationConsumer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IConsumer")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("AssignSeat"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Uri")]),s._v(" _schedulerAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Uri")]),s._v(" _notificationService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Task")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Consume")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ConsumeContext"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("AssignSeat"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ReservationTime "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Now "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" TimeSpan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("FromHours")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// assign the seat for the reservation")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// seats can only be assigned eight hours before the reservation")]),s._v("\n\n            context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ScheduleMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ReservationTime "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TimeSpan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("FromHours")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("This will schedule the message to be delivered to the consumer endpoint at the specified time.")]),s._v(" "),e("blockquote",[e("p",[s._v("If the message should be sent to a different endpoint, the destination address can be specified as an additional parameter.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);