var cyberfolksNs = ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'];

D_EXTEND('zhp.pl',
	// WIX set-up for Polkowice (MS365-7672)
	CNAME('polkowice', 'www118.wixdns.net.'),
	CNAME('www.polkowice', 'www118.wixdns.net.'),
	CNAME('de.polkowice', 'www118.wixdns.net.'),
	CNAME('en.polkowice', 'www118.wixdns.net.'),
	CNAME('pl.polkowice', 'www118.wixdns.net.'),

	Delegation_NS('dolnoslaska', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
	Delegation_NS('dolnoslaska2', cyberfolksNs),
	Delegation_NS('dolnoslaska3', cyberfolksNs),

	// Bazy
    Delegation_NS('czarna', cyberfolksNs),
    Delegation_NS('czarna2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('pobierowo', cyberfolksNs),
    Delegation_NS('pobierowo2', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('rozewie', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),

    // Hufce
	Delegation_NS('bierutow', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('boleslawiec', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),
	Delegation_NS('bystrzycaklodzka', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
    Delegation_NS('dzierzoniow', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
	Delegation_NS('glogow', ['ns1.netart.pl.', 'ns2.netart.pl.']),
	Delegation_NS('jawor', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
	Delegation_NS('karkonoski', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
	Delegation_NS('katy', ['ns5.webd.pl.', 'ns7.webd.pl.']),
	Delegation_NS('klodzko', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
    Delegation_NS('legnica', cyberfolksNs),  // MS365-14080
	Delegation_NS('luban', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('lubin', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']),
	Delegation_NS('lagiewniki', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('olesnica', ['ns1.datanet.pl.', 'ns2.datanet.pl.']),
	Delegation_NS('olawa', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
	Delegation_NS('srodaslaska', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
	Delegation_NS('swidnica', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
	Delegation_NS('walbrzych', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
	Delegation_NS('wroclaw', ['dns20.ovh.net.', 'ns20.ovh.net.']),
	Delegation_NS('wroclawpolnoc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	Delegation_NS('wroclawpoludnie', ['ns1.nazwa.pl.', 'ns2.nazwa.pl.', 'ns3.nazwa.pl.']),
	Delegation_NS('wroclawwschod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),
	Delegation_NS('zmigrod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),

    Delegation_NS('bumerang', ['ns20.ovh.net.', 'dns20.ovh.net.'])
);
