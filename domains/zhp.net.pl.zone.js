D('zhp.net.pl', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
    A('@', '51.75.54.175'),
    CNAME('www', 'zhp.net.pl.'),
    Ms365_Root('zhp.net.pl'),
    Ms365_Subdomain('grupy', 'zhp.net.pl'),

    Delegation_NS('14gzrafiki', ['ns1.cba.pl.', 'ns2.cba.pl.']),
    Delegation_NS('347', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('4szczep', ['dns1.slaskdatacenter.pl.', 'dns2.slaskdatacenter.pl.', 'dns3.slaskdatacenter.pl.']),
    Delegation_NS('czarna5', ['ns1.dhosting.pl.', 'ns2.dhosting.pl.']),
    Delegation_NS('hgrgorzow', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('lapmyduchy', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('5shbrzask', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']), // MS365-4643
    Delegation_NS('4shfeniks', ['ns1.atthost.pl.', 'ns2.atthost.pl.']), // MS365-4651
    Delegation_NS('jott', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.']), // MS365-6517

    Delegation_A('157pdh', '91.227.123.80'),
    Delegation_A('zlotaosemka', '185.54.184.244'),

    // Silnik przekierowań
    Redirects(require('./redirects/redirectFiles/zhp.net.pl.json'))
)
