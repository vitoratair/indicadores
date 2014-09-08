from django import template

register = template.Library()


@register.filter(name='get_url')
def get_url(url):

    url = url.split('/')
    return url[3]


@register.filter(name='getClassByUrl')
def getClassByUrl(url, args):

    url = url.split('/')
    url = url[-2]

    args = args.split('-')

    for arg in args:

        if url == arg:
            return 'active'

    return ''
