(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(e, t, n) {
            e.exports = n("zUnb")
        },
        "C/0J": function(e) {
            e.exports = JSON.parse('{"label":{"common":{"couldNotFetchData":"Unfortunately we could not get data for this user","widgetName":"{{widgetNamePlaceholder}}","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide seedscard ID","notAuthenticated":"Waiting for authorization...","download":"Download file","noCheckingAccount":"You don\'t have a {{cardName}} account","rewardPoints":"Reward Points","checking":"Checking","savings":"Savings","creditcard":"Credit Card","balance":"Balance"},"entities":{"seedscard":{"id":"ID","accountNumber":"entities.seedscard.accountNumber","balance":"entities.seedscard.balance","userId":"entities.seedscard.userId"}}}}')
        },
        G8wc: function(e) {
            e.exports = JSON.parse('{"label":{"common":{"couldNotFetchData":"Unfortunately we could not get data for this user","widgetName":"{{widgetNamePlaceholder}}","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide seedscard ID","notAuthenticated":"Waiting for authorization...","download":"Download file","noCheckingAccount":"You don\'t have a {{cardName}} account","rewardPoints":"Reward Points","checking":"Checking","savings":"Savings","creditcard":"Credit Card","balance":"Balance"},"entities":{"seedscard":{"id":"ID","accountNumber":"entities.seedscard.accountNumber","balance":"entities.seedscard.balance","userId":"entities.seedscard.userId"}}}}')
        },
        zUnb: function(e, t, n) {
            "use strict";

            function r(e) {
                return "function" == typeof e
            }
            n.r(t);
            let s = !1;
            const i = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(e) {
                    if (e) {
                        const e = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
                    } else s && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    s = e
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return s
                }
            };

            function o(e) {
                setTimeout(() => {
                    throw e
                }, 0)
            }
            const a = {
                    closed: !0,
                    next(e) {},
                    error(e) {
                        if (i.useDeprecatedSynchronousErrorHandling) throw e;
                        o(e)
                    },
                    complete() {}
                },
                l = (() => Array.isArray || (e => e && "number" == typeof e.length))();

            function u(e) {
                return null !== e && "object" == typeof e
            }
            const c = (() => {
                function e(e) {
                    return Error.call(this), this.message = e ? `${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = e, this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();
            let h = (() => {
                class e {
                    constructor(e) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._unsubscribe = e)
                    }
                    unsubscribe() {
                        let t;
                        if (this.closed) return;
                        let {
                            _parentOrParents: n,
                            _unsubscribe: s,
                            _subscriptions: i
                        } = this;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
                        else if (null !== n)
                            for (let e = 0; e < n.length; ++e) n[e].remove(this);
                        if (r(s)) try {
                            s.call(this)
                        } catch (o) {
                            t = o instanceof c ? d(o.errors) : [o]
                        }
                        if (l(i)) {
                            let e = -1,
                                n = i.length;
                            for (; ++e < n;) {
                                const n = i[e];
                                if (u(n)) try {
                                    n.unsubscribe()
                                } catch (o) {
                                    t = t || [], o instanceof c ? t = t.concat(d(o.errors)) : t.push(o)
                                }
                            }
                        }
                        if (t) throw new c(t)
                    }
                    add(t) {
                        let n = t;
                        if (!t) return e.EMPTY;
                        switch (typeof t) {
                            case "function":
                                n = new e(t);
                            case "object":
                                if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof e)) {
                                    const t = n;
                                    n = new e, n._subscriptions = [t]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + t + " added to Subscription.")
                        }
                        let {
                            _parentOrParents: r
                        } = n;
                        if (null === r) n._parentOrParents = this;
                        else if (r instanceof e) {
                            if (r === this) return n;
                            n._parentOrParents = [r, this]
                        } else {
                            if (-1 !== r.indexOf(this)) return n;
                            r.push(this)
                        }
                        const s = this._subscriptions;
                        return null === s ? this._subscriptions = [n] : s.push(n), n
                    }
                    remove(e) {
                        const t = this._subscriptions;
                        if (t) {
                            const n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                        }
                    }
                }
                return e.EMPTY = function(e) {
                    return e.closed = !0, e
                }(new e), e
            })();

            function d(e) {
                return e.reduce((e, t) => e.concat(t instanceof c ? t.errors : t), [])
            }
            const f = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
            class p extends h {
                constructor(e, t, n) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = a;
                            break;
                        case 1:
                            if (!e) {
                                this.destination = a;
                                break
                            }
                            if ("object" == typeof e) {
                                e instanceof p ? (this.syncErrorThrowable = e.syncErrorThrowable, this.destination = e, e.add(this)) : (this.syncErrorThrowable = !0, this.destination = new g(this, e));
                                break
                            }
                            default:
                                this.syncErrorThrowable = !0, this.destination = new g(this, e, t, n)
                    }
                } [f]() {
                    return this
                }
                static create(e, t, n) {
                    const r = new p(e, t, n);
                    return r.syncErrorThrowable = !1, r
                }
                next(e) {
                    this.isStopped || this._next(e)
                }
                error(e) {
                    this.isStopped || (this.isStopped = !0, this._error(e))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(e) {
                    this.destination.next(e)
                }
                _error(e) {
                    this.destination.error(e), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: e
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                }
            }
            class g extends p {
                constructor(e, t, n, s) {
                    let i;
                    super(), this._parentSubscriber = e;
                    let o = this;
                    r(t) ? i = t : t && (i = t.next, n = t.error, s = t.complete, t !== a && (o = Object.create(t), r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = i, this._error = n, this._complete = s
                }
                next(e) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: t
                        } = this;
                        i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                    }
                }
                error(e) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: t
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: n
                        } = i;
                        if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                        else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : o(e), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), n) throw e;
                            o(e)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: e
                        } = this;
                        if (this._complete) {
                            const t = () => this._complete.call(this._context);
                            i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, t), this.unsubscribe()) : (this.__tryOrUnsub(t), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(e, t) {
                    try {
                        e.call(this._context, t)
                    } catch (n) {
                        if (this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling) throw n;
                        o(n)
                    }
                }
                __tryOrSetError(e, t, n) {
                    if (!i.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        t.call(this._context, n)
                    } catch (r) {
                        return i.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (o(r), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: e
                    } = this;
                    this._context = null, this._parentSubscriber = null, e.unsubscribe()
                }
            }
            const m = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

            function y(e) {
                return e
            }
            let v = (() => {
                class e {
                    constructor(e) {
                        this._isScalar = !1, e && (this._subscribe = e)
                    }
                    lift(t) {
                        const n = new e;
                        return n.source = this, n.operator = t, n
                    }
                    subscribe(e, t, n) {
                        const {
                            operator: r
                        } = this, s = function(e, t, n) {
                            if (e) {
                                if (e instanceof p) return e;
                                if (e[f]) return e[f]()
                            }
                            return e || t || n ? new p(e, t, n) : new p(a)
                        }(e, t, n);
                        if (s.add(r ? r.call(s, this.source) : this.source || i.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), i.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
                        return s
                    }
                    _trySubscribe(e) {
                        try {
                            return this._subscribe(e)
                        } catch (t) {
                            i.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                                function(e) {
                                    for (; e;) {
                                        const {
                                            closed: t,
                                            destination: n,
                                            isStopped: r
                                        } = e;
                                        if (t || r) return !1;
                                        e = n && n instanceof p ? n : null
                                    }
                                    return !0
                                }(e) ? e.error(t) : console.warn(t)
                        }
                    }
                    forEach(e, t) {
                        return new(t = w(t))((t, n) => {
                            let r;
                            r = this.subscribe(t => {
                                try {
                                    e(t)
                                } catch (s) {
                                    n(s), r && r.unsubscribe()
                                }
                            }, n, t)
                        })
                    }
                    _subscribe(e) {
                        const {
                            source: t
                        } = this;
                        return t && t.subscribe(e)
                    } [m]() {
                        return this
                    }
                    pipe(...e) {
                        return 0 === e.length ? this : (0 === (t = e).length ? y : 1 === t.length ? t[0] : function(e) {
                            return t.reduce((e, t) => t(e), e)
                        })(this);
                        var t
                    }
                    toPromise(e) {
                        return new(e = w(e))((e, t) => {
                            let n;
                            this.subscribe(e => n = e, e => t(e), () => e(n))
                        })
                    }
                }
                return e.create = t => new e(t), e
            })();

            function w(e) {
                if (e || (e = i.Promise || Promise), !e) throw new Error("no Promise impl found");
                return e
            }
            const _ = (() => {
                function e() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();
            class b extends h {
                constructor(e, t) {
                    super(), this.subject = e, this.subscriber = t, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const e = this.subject,
                        t = e.observers;
                    if (this.subject = null, !t || 0 === t.length || e.isStopped || e.closed) return;
                    const n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                }
            }
            class C extends p {
                constructor(e) {
                    super(e), this.destination = e
                }
            }
            let E = (() => {
                class e extends v {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [f]() {
                        return new C(this)
                    }
                    lift(e) {
                        const t = new x(this, this);
                        return t.operator = e, t
                    }
                    next(e) {
                        if (this.closed) throw new _;
                        if (!this.isStopped) {
                            const {
                                observers: t
                            } = this, n = t.length, r = t.slice();
                            for (let s = 0; s < n; s++) r[s].next(e)
                        }
                    }
                    error(e) {
                        if (this.closed) throw new _;
                        this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                        const {
                            observers: t
                        } = this, n = t.length, r = t.slice();
                        for (let s = 0; s < n; s++) r[s].error(e);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new _;
                        this.isStopped = !0;
                        const {
                            observers: e
                        } = this, t = e.length, n = e.slice();
                        for (let r = 0; r < t; r++) n[r].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(e) {
                        if (this.closed) throw new _;
                        return super._trySubscribe(e)
                    }
                    _subscribe(e) {
                        if (this.closed) throw new _;
                        return this.hasError ? (e.error(this.thrownError), h.EMPTY) : this.isStopped ? (e.complete(), h.EMPTY) : (this.observers.push(e), new b(this, e))
                    }
                    asObservable() {
                        const e = new v;
                        return e.source = this, e
                    }
                }
                return e.create = (e, t) => new x(e, t), e
            })();
            class x extends E {
                constructor(e, t) {
                    super(), this.destination = e, this.source = t
                }
                next(e) {
                    const {
                        destination: t
                    } = this;
                    t && t.next && t.next(e)
                }
                error(e) {
                    const {
                        destination: t
                    } = this;
                    t && t.error && this.destination.error(e)
                }
                complete() {
                    const {
                        destination: e
                    } = this;
                    e && e.complete && this.destination.complete()
                }
                _subscribe(e) {
                    const {
                        source: t
                    } = this;
                    return t ? this.source.subscribe(e) : h.EMPTY
                }
            }

            function T(e) {
                return e && "function" == typeof e.schedule
            }
            class S extends p {
                constructor(e, t, n) {
                    super(), this.parent = e, this.outerValue = t, this.outerIndex = n, this.index = 0
                }
                _next(e) {
                    this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
                }
                _error(e) {
                    this.parent.notifyError(e, this), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }
            const k = e => t => {
                for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                t.complete()
            };

            function I() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            const N = I(),
                A = e => e && "number" == typeof e.length && "function" != typeof e;

            function D(e) {
                return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
            }
            const R = e => {
                if (e && "function" == typeof e[m]) return r = e, e => {
                    const t = r[m]();
                    if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return t.subscribe(e)
                };
                if (A(e)) return k(e);
                if (D(e)) return n = e, e => (n.then(t => {
                    e.closed || (e.next(t), e.complete())
                }, t => e.error(t)).then(null, o), e);
                if (e && "function" == typeof e[N]) return t = e, e => {
                    const n = t[N]();
                    for (;;) {
                        const t = n.next();
                        if (t.done) {
                            e.complete();
                            break
                        }
                        if (e.next(t.value), e.closed) break
                    }
                    return "function" == typeof n.return && e.add(() => {
                        n.return && n.return()
                    }), e
                }; {
                    const t = u(e) ? "an invalid object" : `'${e}'`;
                    throw new TypeError(`You provided ${t} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
                }
                var t, n, r
            };

            function O(e, t, n, r, s = new S(e, n, r)) {
                if (!s.closed) return t instanceof v ? t.subscribe(s) : R(t)(s)
            }
            class P extends p {
                notifyNext(e, t, n, r, s) {
                    this.destination.next(t)
                }
                notifyError(e, t) {
                    this.destination.error(e)
                }
                notifyComplete(e) {
                    this.destination.complete()
                }
            }

            function L(e, t) {
                return function(n) {
                    if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new j(e, t))
                }
            }
            class j {
                constructor(e, t) {
                    this.project = e, this.thisArg = t
                }
                call(e, t) {
                    return t.subscribe(new F(e, this.project, this.thisArg))
                }
            }
            class F extends p {
                constructor(e, t, n) {
                    super(e), this.project = t, this.count = 0, this.thisArg = n || this
                }
                _next(e) {
                    let t;
                    try {
                        t = this.project.call(this.thisArg, e, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(t)
                }
            }

            function M(e, t) {
                return new v(n => {
                    const r = new h;
                    let s = 0;
                    return r.add(t.schedule((function() {
                        s !== e.length ? (n.next(e[s++]), n.closed || r.add(this.schedule())) : n.complete()
                    }))), r
                })
            }

            function V(e, t) {
                return t ? function(e, t) {
                    if (null != e) {
                        if (function(e) {
                                return e && "function" == typeof e[m]
                            }(e)) return function(e, t) {
                            return new v(n => {
                                const r = new h;
                                return r.add(t.schedule(() => {
                                    const s = e[m]();
                                    r.add(s.subscribe({
                                        next(e) {
                                            r.add(t.schedule(() => n.next(e)))
                                        },
                                        error(e) {
                                            r.add(t.schedule(() => n.error(e)))
                                        },
                                        complete() {
                                            r.add(t.schedule(() => n.complete()))
                                        }
                                    }))
                                })), r
                            })
                        }(e, t);
                        if (D(e)) return function(e, t) {
                            return new v(n => {
                                const r = new h;
                                return r.add(t.schedule(() => e.then(e => {
                                    r.add(t.schedule(() => {
                                        n.next(e), r.add(t.schedule(() => n.complete()))
                                    }))
                                }, e => {
                                    r.add(t.schedule(() => n.error(e)))
                                }))), r
                            })
                        }(e, t);
                        if (A(e)) return M(e, t);
                        if (function(e) {
                                return e && "function" == typeof e[N]
                            }(e) || "string" == typeof e) return function(e, t) {
                            if (!e) throw new Error("Iterable cannot be null");
                            return new v(n => {
                                const r = new h;
                                let s;
                                return r.add(() => {
                                    s && "function" == typeof s.return && s.return()
                                }), r.add(t.schedule(() => {
                                    s = e[N](), r.add(t.schedule((function() {
                                        if (n.closed) return;
                                        let e, t;
                                        try {
                                            const n = s.next();
                                            e = n.value, t = n.done
                                        } catch (r) {
                                            return void n.error(r)
                                        }
                                        t ? n.complete() : (n.next(e), this.schedule())
                                    })))
                                })), r
                            })
                        }(e, t)
                    }
                    throw new TypeError((null !== e && typeof e || e) + " is not observable")
                }(e, t) : e instanceof v ? e : new v(R(e))
            }

            function H(e, t, n = Number.POSITIVE_INFINITY) {
                return "function" == typeof t ? r => r.pipe(H((n, r) => V(e(n, r)).pipe(L((e, s) => t(n, e, r, s))), n)) : ("number" == typeof t && (n = t), t => t.lift(new $(e, n)))
            }
            class $ {
                constructor(e, t = Number.POSITIVE_INFINITY) {
                    this.project = e, this.concurrent = t
                }
                call(e, t) {
                    return t.subscribe(new z(e, this.project, this.concurrent))
                }
            }
            class z extends P {
                constructor(e, t, n = Number.POSITIVE_INFINITY) {
                    super(e), this.project = t, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(e) {
                    this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
                }
                _tryNext(e) {
                    let t;
                    const n = this.index++;
                    try {
                        t = this.project(e, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this.active++, this._innerSub(t, e, n)
                }
                _innerSub(e, t, n) {
                    const r = new S(this, t, n),
                        s = this.destination;
                    s.add(r);
                    const i = O(this, e, void 0, void 0, r);
                    i !== r && s.add(i)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(e, t, n, r, s) {
                    this.destination.next(t)
                }
                notifyComplete(e) {
                    const t = this.buffer;
                    this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }

            function U(e = Number.POSITIVE_INFINITY) {
                return H(y, e)
            }

            function B(e, t) {
                return t ? M(e, t) : new v(k(e))
            }

            function Z(...e) {
                let t = Number.POSITIVE_INFINITY,
                    n = null,
                    r = e[e.length - 1];
                return T(r) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof r && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof v ? e[0] : U(t)(B(e, n))
            }

            function K() {
                return function(e) {
                    return e.lift(new W(e))
                }
            }
            class W {
                constructor(e) {
                    this.connectable = e
                }
                call(e, t) {
                    const {
                        connectable: n
                    } = this;
                    n._refCount++;
                    const r = new q(e, n),
                        s = t.subscribe(r);
                    return r.closed || (r.connection = n.connect()), s
                }
            }
            class q extends p {
                constructor(e, t) {
                    super(e), this.connectable = t
                }
                _unsubscribe() {
                    const {
                        connectable: e
                    } = this;
                    if (!e) return void(this.connection = null);
                    this.connectable = null;
                    const t = e._refCount;
                    if (t <= 0) return void(this.connection = null);
                    if (e._refCount = t - 1, t > 1) return void(this.connection = null);
                    const {
                        connection: n
                    } = this, r = e._connection;
                    this.connection = null, !r || n && r !== n || r.unsubscribe()
                }
            }
            class G extends v {
                constructor(e, t) {
                    super(), this.source = e, this.subjectFactory = t, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(e) {
                    return this.getSubject().subscribe(e)
                }
                getSubject() {
                    const e = this._subject;
                    return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let e = this._connection;
                    return e || (this._isComplete = !1, e = this._connection = new h, e.add(this.source.subscribe(new J(this.getSubject(), this))), e.closed && (this._connection = null, e = h.EMPTY)), e
                }
                refCount() {
                    return K()(this)
                }
            }
            const Y = (() => {
                const e = G.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: e._subscribe
                    },
                    _isComplete: {
                        value: e._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: e.getSubject
                    },
                    connect: {
                        value: e.connect
                    },
                    refCount: {
                        value: e.refCount
                    }
                }
            })();
            class J extends C {
                constructor(e, t) {
                    super(e), this.connectable = t
                }
                _error(e) {
                    this._unsubscribe(), super._error(e)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const e = this.connectable;
                    if (e) {
                        this.connectable = null;
                        const t = e._connection;
                        e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                    }
                }
            }

            function Q() {
                return new E
            }

            function X(e) {
                return {
                    toString: e
                }.toString()
            }

            function ee(e, t, n) {
                return X(() => {
                    const r = function(e) {
                        return function(...t) {
                            if (e) {
                                const n = e(...t);
                                for (const e in n) this[e] = n[e]
                            }
                        }
                    }(t);

                    function s(...e) {
                        if (this instanceof s) return r.apply(this, e), this;
                        const t = new s(...e);
                        return n.annotation = t, n;

                        function n(e, n, r) {
                            const s = e.hasOwnProperty("__parameters__") ? e.__parameters__ : Object.defineProperty(e, "__parameters__", {
                                value: []
                            }).__parameters__;
                            for (; s.length <= r;) s.push(null);
                            return (s[r] = s[r] || []).push(t), e
                        }
                    }
                    return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s
                })
            }
            const te = ee("Inject", e => ({
                    token: e
                })),
                ne = ee("Optional"),
                re = ee("Self"),
                se = ee("SkipSelf");
            var ie = function(e) {
                return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
            }({});

            function oe(e) {
                for (let t in e)
                    if (e[t] === oe) return t;
                throw Error("Could not find renamed property on target object.")
            }

            function ae(e) {
                return {
                    token: e.token,
                    providedIn: e.providedIn || null,
                    factory: e.factory,
                    value: void 0
                }
            }

            function le(e) {
                return {
                    factory: e.factory,
                    providers: e.providers || [],
                    imports: e.imports || []
                }
            }

            function ue(e) {
                return ce(e, e[de]) || ce(e, e[ge])
            }

            function ce(e, t) {
                return t && t.token === e ? t : null
            }

            function he(e) {
                return e && (e.hasOwnProperty(fe) || e.hasOwnProperty(me)) ? e[fe] : null
            }
            const de = oe({
                    "\u0275prov": oe
                }),
                fe = oe({
                    "\u0275inj": oe
                }),
                pe = oe({
                    "\u0275provFallback": oe
                }),
                ge = oe({
                    ngInjectableDef: oe
                }),
                me = oe({
                    ngInjectorDef: oe
                });

            function ye(e) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return "[" + e.map(ye).join(", ") + "]";
                if (null == e) return "" + e;
                if (e.overriddenName) return `${e.overriddenName}`;
                if (e.name) return `${e.name}`;
                const t = e.toString();
                if (null == t) return "" + t;
                const n = t.indexOf("\n");
                return -1 === n ? t : t.substring(0, n)
            }

            function ve(e, t) {
                return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
            }
            const we = oe({
                __forward_ref__: oe
            });

            function _e(e) {
                return e.__forward_ref__ = _e, e.toString = function() {
                    return ye(this())
                }, e
            }

            function be(e) {
                return Ce(e) ? e() : e
            }

            function Ce(e) {
                return "function" == typeof e && e.hasOwnProperty(we) && e.__forward_ref__ === _e
            }
            const Ee = "undefined" != typeof globalThis && globalThis,
                xe = "undefined" != typeof window && window,
                Te = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Se = "undefined" != typeof global && global,
                ke = Ee || Se || xe || Te,
                Ie = oe({
                    "\u0275cmp": oe
                }),
                Ne = oe({
                    "\u0275dir": oe
                }),
                Ae = oe({
                    "\u0275pipe": oe
                }),
                De = oe({
                    "\u0275mod": oe
                }),
                Re = oe({
                    "\u0275loc": oe
                }),
                Oe = oe({
                    "\u0275fac": oe
                }),
                Pe = oe({
                    __NG_ELEMENT_ID__: oe
                });
            class Le {
                constructor(e, t) {
                    this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof t ? this.__NG_ELEMENT_ID__ = t : void 0 !== t && (this.\u0275prov = ae({
                        token: this,
                        providedIn: t.providedIn || "root",
                        factory: t.factory
                    }))
                }
                toString() {
                    return `InjectionToken ${this._desc}`
                }
            }
            const je = new Le("INJECTOR", -1),
                Fe = {},
                Me = /\n/gm,
                Ve = oe({
                    provide: String,
                    useValue: oe
                });
            let He, $e = void 0;

            function ze(e) {
                const t = $e;
                return $e = e, t
            }

            function Ue(e) {
                const t = He;
                return He = e, t
            }

            function Be(e, t = ie.Default) {
                if (void 0 === $e) throw new Error("inject() must be called from an injection context");
                return null === $e ? Ke(e, void 0, t) : $e.get(e, t & ie.Optional ? null : void 0, t)
            }

            function Ze(e, t = ie.Default) {
                return (He || Be)(be(e), t)
            }

            function Ke(e, t, n) {
                const r = ue(e);
                if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                if (n & ie.Optional) return null;
                if (void 0 !== t) return t;
                throw new Error(`Injector: NOT_FOUND [${ye(e)}]`)
            }

            function We(e) {
                const t = [];
                for (let n = 0; n < e.length; n++) {
                    const r = be(e[n]);
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        let e = void 0,
                            n = ie.Default;
                        for (let t = 0; t < r.length; t++) {
                            const s = r[t];
                            s instanceof ne || "Optional" === s.ngMetadataName || s === ne ? n |= ie.Optional : s instanceof se || "SkipSelf" === s.ngMetadataName || s === se ? n |= ie.SkipSelf : s instanceof re || "Self" === s.ngMetadataName || s === re ? n |= ie.Self : e = s instanceof te || s === te ? s.token : s
                        }
                        t.push(Ze(e, n))
                    } else t.push(Ze(r))
                }
                return t
            }
            class qe {
                get(e, t = Fe) {
                    if (t === Fe) {
                        const t = new Error(`NullInjectorError: No provider for ${ye(e)}!`);
                        throw t.name = "NullInjectorError", t
                    }
                    return t
                }
            }
            class Ge {}

            function Ye(e, t) {
                e.forEach(e => Array.isArray(e) ? Ye(e, t) : t(e))
            }

            function Je(e, t, n) {
                t >= e.length ? e.push(n) : e.splice(t, 0, n)
            }

            function Qe(e, t) {
                return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
            }
            const Xe = function() {
                    var e = {
                        OnPush: 0,
                        Default: 1
                    };
                    return e[e.OnPush] = "OnPush", e[e.Default] = "Default", e
                }(),
                et = function() {
                    var e = {
                        Emulated: 0,
                        Native: 1,
                        None: 2,
                        ShadowDom: 3
                    };
                    return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e
                }(),
                tt = {},
                nt = [];
            let rt = 0;

            function st(e) {
                return X(() => {
                    const t = e.type,
                        n = t.prototype,
                        r = {},
                        s = {
                            type: t,
                            providersResolver: null,
                            decls: e.decls,
                            vars: e.vars,
                            factory: null,
                            template: e.template || null,
                            consts: e.consts || null,
                            ngContentSelectors: e.ngContentSelectors,
                            hostBindings: e.hostBindings || null,
                            hostVars: e.hostVars || 0,
                            hostAttrs: e.hostAttrs || null,
                            contentQueries: e.contentQueries || null,
                            declaredInputs: r,
                            inputs: null,
                            outputs: null,
                            exportAs: e.exportAs || null,
                            onChanges: null,
                            onInit: n.ngOnInit || null,
                            doCheck: n.ngDoCheck || null,
                            afterContentInit: n.ngAfterContentInit || null,
                            afterContentChecked: n.ngAfterContentChecked || null,
                            afterViewInit: n.ngAfterViewInit || null,
                            afterViewChecked: n.ngAfterViewChecked || null,
                            onDestroy: n.ngOnDestroy || null,
                            onPush: e.changeDetection === Xe.OnPush,
                            directiveDefs: null,
                            pipeDefs: null,
                            selectors: e.selectors || nt,
                            viewQuery: e.viewQuery || null,
                            features: e.features || null,
                            data: e.data || {},
                            encapsulation: e.encapsulation || et.Emulated,
                            id: "c",
                            styles: e.styles || nt,
                            _: null,
                            setInput: null,
                            schemas: e.schemas || null,
                            tView: null
                        },
                        i = e.directives,
                        o = e.features,
                        a = e.pipes;
                    return s.id += rt++, s.inputs = ut(e.inputs, r), s.outputs = ut(e.outputs), o && o.forEach(e => e(s)), s.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(it) : null, s.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(ot) : null, s
                })
            }

            function it(e) {
                return dt(e) || function(e) {
                    return e[Ne] || null
                }(e)
            }

            function ot(e) {
                return function(e) {
                    return e[Ae] || null
                }(e)
            }
            const at = {};

            function lt(e) {
                const t = {
                    type: e.type,
                    bootstrap: e.bootstrap || nt,
                    declarations: e.declarations || nt,
                    imports: e.imports || nt,
                    exports: e.exports || nt,
                    transitiveCompileScopes: null,
                    schemas: e.schemas || null,
                    id: e.id || null
                };
                return null != e.id && X(() => {
                    at[e.id] = e.type
                }), t
            }

            function ut(e, t) {
                if (null == e) return tt;
                const n = {};
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        let s = e[r],
                            i = s;
                        Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, t && (t[s] = i)
                    } return n
            }
            const ct = st;

            function ht(e) {
                return {
                    type: e.type,
                    name: e.name,
                    factory: null,
                    pure: !1 !== e.pure,
                    onDestroy: e.type.prototype.ngOnDestroy || null
                }
            }

            function dt(e) {
                return e[Ie] || null
            }

            function ft(e, t) {
                return e.hasOwnProperty(Oe) ? e[Oe] : null
            }

            function pt(e, t) {
                const n = e[De] || null;
                if (!n && !0 === t) throw new Error(`Type ${ye(e)} does not have '\u0275mod' property.`);
                return n
            }

            function gt(e) {
                return Array.isArray(e) && "object" == typeof e[1]
            }

            function mt(e) {
                return Array.isArray(e) && !0 === e[1]
            }

            function yt(e) {
                return 0 != (8 & e.flags)
            }

            function vt(e) {
                return 2 == (2 & e.flags)
            }

            function wt(e) {
                return 1 == (1 & e.flags)
            }

            function _t(e) {
                return null !== e.template
            }

            function bt(e) {
                return 0 != (512 & e[2])
            }
            let Ct = void 0;

            function Et(e) {
                return !!e.listen
            }
            const xt = {
                createRenderer: (e, t) => void 0 !== Ct ? Ct : "undefined" != typeof document ? document : void 0
            };

            function Tt(e) {
                for (; Array.isArray(e);) e = e[0];
                return e
            }

            function St(e, t) {
                return Tt(t[e.index])
            }

            function kt(e, t) {
                return e.data[t + 19]
            }

            function It(e, t) {
                return e[t + 19]
            }

            function Nt(e, t) {
                const n = t[e];
                return gt(n) ? n : n[0]
            }

            function At(e) {
                const t = function(e) {
                    return e.__ngContext__ || null
                }(e);
                return t ? Array.isArray(t) ? t : t.lView : null
            }

            function Dt(e) {
                return 128 == (128 & e[2])
            }

            function Rt(e, t) {
                return null === e || null == t ? null : e[t]
            }

            function Ot(e) {
                e[18] = 0
            }
            const Pt = {
                lFrame: Jt(null),
                bindingsEnabled: !0,
                checkNoChangesMode: !1
            };

            function Lt() {
                return Pt.bindingsEnabled
            }

            function jt() {
                return Pt.lFrame.lView
            }

            function Ft() {
                return Pt.lFrame.tView
            }

            function Mt() {
                return Pt.lFrame.previousOrParentTNode
            }

            function Vt(e, t) {
                Pt.lFrame.previousOrParentTNode = e, Pt.lFrame.isParent = t
            }

            function Ht() {
                return Pt.lFrame.isParent
            }

            function $t() {
                return Pt.checkNoChangesMode
            }

            function zt(e) {
                Pt.checkNoChangesMode = e
            }

            function Ut() {
                const e = Pt.lFrame;
                let t = e.bindingRootIndex;
                return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
            }

            function Bt() {
                return Pt.lFrame.bindingIndex++
            }

            function Zt(e, t) {
                const n = Pt.lFrame;
                n.bindingIndex = n.bindingRootIndex = e, Kt(t)
            }

            function Kt(e) {
                Pt.lFrame.currentDirectiveIndex = e
            }

            function Wt(e) {
                Pt.lFrame.currentQueryIndex = e
            }

            function qt(e, t) {
                const n = Yt();
                Pt.lFrame = n, n.previousOrParentTNode = t, n.lView = e
            }

            function Gt(e, t) {
                const n = Yt(),
                    r = e[1];
                Pt.lFrame = n, n.previousOrParentTNode = t, n.lView = e, n.tView = r, n.contextLView = e, n.bindingIndex = r.bindingStartIndex
            }

            function Yt() {
                const e = Pt.lFrame,
                    t = null === e ? null : e.child;
                return null === t ? Jt(e) : t
            }

            function Jt(e) {
                const t = {
                    previousOrParentTNode: null,
                    isParent: !0,
                    lView: null,
                    tView: null,
                    selectedIndex: 0,
                    contextLView: null,
                    elementDepthCount: 0,
                    currentNamespace: null,
                    currentSanitizer: null,
                    currentDirectiveIndex: -1,
                    bindingRootIndex: -1,
                    bindingIndex: -1,
                    currentQueryIndex: 0,
                    parent: e,
                    child: null
                };
                return null !== e && (e.child = t), t
            }

            function Qt() {
                const e = Pt.lFrame;
                return Pt.lFrame = e.parent, e.previousOrParentTNode = null, e.lView = null, e
            }
            const Xt = Qt;

            function en() {
                const e = Qt();
                e.isParent = !0, e.tView = null, e.selectedIndex = 0, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.currentSanitizer = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
            }

            function tn() {
                return Pt.lFrame.selectedIndex
            }

            function nn(e) {
                Pt.lFrame.selectedIndex = e
            }

            function rn(e, t) {
                for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                    const t = e.data[n];
                    t.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(-n, t.afterContentInit), t.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, t.afterContentChecked)), t.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(-n, t.afterViewInit), t.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, t.afterViewChecked)), null != t.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy)
                }
            }

            function sn(e, t, n) {
                ln(e, t, 3, n)
            }

            function on(e, t, n, r) {
                (3 & e[2]) === n && ln(e, t, n, r)
            }

            function an(e, t) {
                let n = e[2];
                (3 & n) === t && (n &= 1023, n += 1, e[2] = n)
            }

            function ln(e, t, n, r) {
                const s = null != r ? r : -1;
                let i = 0;
                for (let o = void 0 !== r ? 65535 & e[18] : 0; o < t.length; o++)
                    if ("number" == typeof t[o + 1]) {
                        if (i = t[o], null != r && i >= r) break
                    } else t[o] < 0 && (e[18] += 65536), (i < s || -1 == s) && (un(e, n, t, o), e[18] = (4294901760 & e[18]) + o + 2), o++
            }

            function un(e, t, n, r) {
                const s = n[r] < 0,
                    i = n[r + 1],
                    o = e[s ? -n[r] : n[r]];
                s ? e[2] >> 10 < e[18] >> 16 && (3 & e[2]) === t && (e[2] += 1024, i.call(o)) : i.call(o)
            }
            class cn {
                constructor(e, t, n) {
                    this.factory = e, this.resolving = !1, this.canSeeViewProviders = t, this.injectImpl = n
                }
            }

            function hn(e, t, n) {
                const r = Et(e);
                let s = 0;
                for (; s < n.length;) {
                    const i = n[s];
                    if ("number" == typeof i) {
                        if (0 !== i) break;
                        s++;
                        const o = n[s++],
                            a = n[s++],
                            l = n[s++];
                        r ? e.setAttribute(t, a, l, o) : t.setAttributeNS(o, a, l)
                    } else {
                        const o = i,
                            a = n[++s];
                        dn(o) ? r && e.setProperty(t, o, a) : r ? e.setAttribute(t, o, a) : t.setAttribute(o, a), s++
                    }
                }
                return s
            }

            function dn(e) {
                return 64 === e.charCodeAt(0)
            }

            function fn(e, t) {
                if (null === t || 0 === t.length);
                else if (null === e || 0 === e.length) e = t.slice();
                else {
                    let n = -1;
                    for (let r = 0; r < t.length; r++) {
                        const s = t[r];
                        "number" == typeof s ? n = s : 0 === n || pn(e, n, s, null, -1 === n || 2 === n ? t[++r] : null)
                    }
                }
                return e
            }

            function pn(e, t, n, r, s) {
                let i = 0,
                    o = e.length;
                if (-1 === t) o = -1;
                else
                    for (; i < e.length;) {
                        const n = e[i++];
                        if ("number" == typeof n) {
                            if (n === t) {
                                o = -1;
                                break
                            }
                            if (n > t) {
                                o = i - 1;
                                break
                            }
                        }
                    }
                for (; i < e.length;) {
                    const t = e[i];
                    if ("number" == typeof t) break;
                    if (t === n) {
                        if (null === r) return void(null !== s && (e[i + 1] = s));
                        if (r === e[i + 1]) return void(e[i + 2] = s)
                    }
                    i++, null !== r && i++, null !== s && i++
                } - 1 !== o && (e.splice(o, 0, t), i = o + 1), e.splice(i++, 0, n), null !== r && e.splice(i++, 0, r), null !== s && e.splice(i++, 0, s)
            }

            function gn(e) {
                return -1 !== e
            }

            function mn(e) {
                return 32767 & e
            }

            function yn(e) {
                return e >> 16
            }

            function vn(e, t) {
                let n = yn(e),
                    r = t;
                for (; n > 0;) r = r[15], n--;
                return r
            }

            function wn(e) {
                return "string" == typeof e ? e : null == e ? "" : "" + e
            }

            function _n(e) {
                return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : wn(e)
            }
            const bn = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(ke))();

            function Cn(e) {
                return e instanceof Function ? e() : e
            }
            let En = !0;

            function xn(e) {
                const t = En;
                return En = e, t
            }
            let Tn = 0;

            function Sn(e, t) {
                const n = In(e, t);
                if (-1 !== n) return n;
                const r = t[1];
                r.firstCreatePass && (e.injectorIndex = t.length, kn(r.data, e), kn(t, null), kn(r.blueprint, null));
                const s = Nn(e, t),
                    i = e.injectorIndex;
                if (gn(s)) {
                    const e = mn(s),
                        n = vn(s, t),
                        r = n[1].data;
                    for (let s = 0; s < 8; s++) t[i + s] = n[e + s] | r[e + s]
                }
                return t[i + 8] = s, i
            }

            function kn(e, t) {
                e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
            }

            function In(e, t) {
                return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null == t[e.injectorIndex + 8] ? -1 : e.injectorIndex
            }

            function Nn(e, t) {
                if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
                let n = t[6],
                    r = 1;
                for (; n && -1 === n.injectorIndex;) n = (t = t[15]) ? t[6] : null, r++;
                return n ? n.injectorIndex | r << 16 : -1
            }

            function An(e, t, n) {
                ! function(e, t, n) {
                    let r = "string" != typeof n ? n[Pe] : n.charCodeAt(0) || 0;
                    null == r && (r = n[Pe] = Tn++);
                    const s = 255 & r,
                        i = 1 << s,
                        o = 64 & s,
                        a = 32 & s,
                        l = t.data;
                    128 & s ? o ? a ? l[e + 7] |= i : l[e + 6] |= i : a ? l[e + 5] |= i : l[e + 4] |= i : o ? a ? l[e + 3] |= i : l[e + 2] |= i : a ? l[e + 1] |= i : l[e] |= i
                }(e, t, n)
            }

            function Dn(e, t, n, r = ie.Default, s) {
                if (null !== e) {
                    const s = function(e) {
                        if ("string" == typeof e) return e.charCodeAt(0) || 0;
                        const t = e[Pe];
                        return "number" == typeof t && t > 0 ? 255 & t : t
                    }(n);
                    if ("function" == typeof s) {
                        qt(t, e);
                        try {
                            const e = s();
                            if (null != e || r & ie.Optional) return e;
                            throw new Error(`No provider for ${_n(n)}!`)
                        } finally {
                            Xt()
                        }
                    } else if ("number" == typeof s) {
                        if (-1 === s) return new Fn(e, t);
                        let i = null,
                            o = In(e, t),
                            a = -1,
                            l = r & ie.Host ? t[16][6] : null;
                        for ((-1 === o || r & ie.SkipSelf) && (a = -1 === o ? Nn(e, t) : t[o + 8], jn(r, !1) ? (i = t[1], o = mn(a), t = vn(a, t)) : o = -1); - 1 !== o;) {
                            a = t[o + 8];
                            const e = t[1];
                            if (Ln(s, o, e.data)) {
                                const e = On(o, t, n, i, r, l);
                                if (e !== Rn) return e
                            }
                            jn(r, t[1].data[o + 8] === l) && Ln(s, o, t) ? (i = e, o = mn(a), t = vn(a, t)) : o = -1
                        }
                    }
                }
                if (r & ie.Optional && void 0 === s && (s = null), 0 == (r & (ie.Self | ie.Host))) {
                    const e = t[9],
                        i = Ue(void 0);
                    try {
                        return e ? e.get(n, s, r & ie.Optional) : Ke(n, s, r & ie.Optional)
                    } finally {
                        Ue(i)
                    }
                }
                if (r & ie.Optional) return s;
                throw new Error(`NodeInjector: NOT_FOUND [${_n(n)}]`)
            }
            const Rn = {};

            function On(e, t, n, r, s, i) {
                const o = t[1],
                    a = o.data[e + 8],
                    l = function(e, t, n, r, s) {
                        const i = e.providerIndexes,
                            o = t.data,
                            a = 65535 & i,
                            l = e.directiveStart,
                            u = i >> 16,
                            c = s ? a + u : e.directiveEnd;
                        for (let h = r ? a : a + u; h < c; h++) {
                            const e = o[h];
                            if (h < l && n === e || h >= l && e.type === n) return h
                        }
                        if (s) {
                            const e = o[l];
                            if (e && _t(e) && e.type === n) return l
                        }
                        return null
                    }(a, o, n, null == r ? vt(a) && En : r != o && 3 === a.type, s & ie.Host && i === a);
                return null !== l ? Pn(t, o, l, a) : Rn
            }

            function Pn(e, t, n, r) {
                let s = e[n];
                const i = t.data;
                if (s instanceof cn) {
                    const o = s;
                    if (o.resolving) throw new Error(`Circular dep for ${_n(i[n])}`);
                    const a = xn(o.canSeeViewProviders);
                    let l;
                    o.resolving = !0, o.injectImpl && (l = Ue(o.injectImpl)), qt(e, r);
                    try {
                        s = e[n] = o.factory(void 0, i, e, r), t.firstCreatePass && n >= r.directiveStart && function(e, t, n) {
                            const {
                                onChanges: r,
                                onInit: s,
                                doCheck: i
                            } = t;
                            r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, r)), s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i))
                        }(n, i[n], t)
                    } finally {
                        o.injectImpl && Ue(l), xn(a), o.resolving = !1, Xt()
                    }
                }
                return s
            }

            function Ln(e, t, n) {
                const r = 64 & e,
                    s = 32 & e;
                let i;
                return i = 128 & e ? r ? s ? n[t + 7] : n[t + 6] : s ? n[t + 5] : n[t + 4] : r ? s ? n[t + 3] : n[t + 2] : s ? n[t + 1] : n[t], !!(i & 1 << e)
            }

            function jn(e, t) {
                return !(e & ie.Self || e & ie.Host && t)
            }
            class Fn {
                constructor(e, t) {
                    this._tNode = e, this._lView = t
                }
                get(e, t) {
                    return Dn(this._tNode, this._lView, e, void 0, t)
                }
            }

            function Mn(e) {
                return X(() => {
                    const t = Object.getPrototypeOf(e.prototype).constructor,
                        n = t[Oe] || function e(t) {
                            const n = t;
                            if (Ce(t)) return () => {
                                const t = e(be(n));
                                return t ? t() : null
                            };
                            let r = ft(n);
                            if (null === r) {
                                const e = he(n);
                                r = e && e.factory
                            }
                            return r || null
                        }(t);
                    return null !== n ? n : e => new e
                })
            }

            function Vn(e) {
                return e.ngDebugContext
            }

            function Hn(e) {
                return e.ngOriginalError
            }

            function $n(e, ...t) {
                e.error(...t)
            }
            class zn {
                constructor() {
                    this._console = console
                }
                handleError(e) {
                    const t = this._findOriginalError(e),
                        n = this._findContext(e),
                        r = function(e) {
                            return e.ngErrorLogger || $n
                        }(e);
                    r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
                }
                _findContext(e) {
                    return e ? Vn(e) ? Vn(e) : this._findContext(Hn(e)) : null
                }
                _findOriginalError(e) {
                    let t = Hn(e);
                    for (; t && Hn(t);) t = Hn(t);
                    return t
                }
            }
            class Un {
                constructor(e) {
                    this.changingThisBreaksApplicationSecurity = e
                }
                toString() {
                    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
                }
            }
            let Bn = !0,
                Zn = !1;

            function Kn() {
                return Zn = !0, Bn
            }
            const Wn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                qn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
                Gn = function() {
                    var e = {
                        NONE: 0,
                        HTML: 1,
                        STYLE: 2,
                        SCRIPT: 3,
                        URL: 4,
                        RESOURCE_URL: 5
                    };
                    return e[e.NONE] = "NONE", e[e.HTML] = "HTML", e[e.STYLE] = "STYLE", e[e.SCRIPT] = "SCRIPT", e[e.URL] = "URL", e[e.RESOURCE_URL] = "RESOURCE_URL", e
                }();

            function Yn(e) {
                const t = function() {
                    const e = jt();
                    return e && e[12]
                }();
                return t ? t.sanitize(Gn.URL, e) || "" : function(e, t) {
                    const n = function(e) {
                        return e instanceof Un && e.getTypeName() || null
                    }(e);
                    if (null != n && n !== t) {
                        if ("ResourceURL" === n && "URL" === t) return !0;
                        throw new Error(`Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`)
                    }
                    return n === t
                }(e, "URL") ? (r = e) instanceof Un ? r.changingThisBreaksApplicationSecurity : r : (n = wn(e), (n = String(n)).match(Wn) || n.match(qn) ? n : (Kn() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`), "unsafe:" + n));
                var n, r
            }

            function Jn(e, t) {
                e.__ngContext__ = t
            }

            function Qn(e) {
                throw new Error(`Multiple components match node with tagname ${e.tagName}`)
            }

            function Xn() {
                throw new Error("Cannot mix multi providers and regular providers")
            }

            function er(e, t, n) {
                let r = e.length;
                for (;;) {
                    const s = e.indexOf(t, n);
                    if (-1 === s) return s;
                    if (0 === s || e.charCodeAt(s - 1) <= 32) {
                        const n = t.length;
                        if (s + n === r || e.charCodeAt(s + n) <= 32) return s
                    }
                    n = s + 1
                }
            }

            function tr(e, t, n) {
                let r = 0;
                for (; r < e.length;) {
                    let s = e[r++];
                    if (n && "class" === s) {
                        if (s = e[r], -1 !== er(s.toLowerCase(), t, 0)) return !0
                    } else if (1 === s) {
                        for (; r < e.length && "string" == typeof(s = e[r++]);)
                            if (s.toLowerCase() === t) return !0;
                        return !1
                    }
                }
                return !1
            }

            function nr(e) {
                return 0 === e.type && "ng-template" !== e.tagName
            }

            function rr(e, t, n) {
                return t === (0 !== e.type || n ? e.tagName : "ng-template")
            }

            function sr(e, t, n) {
                let r = 4;
                const s = e.attrs || [],
                    i = function(e) {
                        for (let n = 0; n < e.length; n++)
                            if (3 === (t = e[n]) || 4 === t || 6 === t) return n;
                        var t;
                        return e.length
                    }(s);
                let o = !1;
                for (let a = 0; a < t.length; a++) {
                    const l = t[a];
                    if ("number" != typeof l) {
                        if (!o)
                            if (4 & r) {
                                if (r = 2 | 1 & r, "" !== l && !rr(e, l, n) || "" === l && 1 === t.length) {
                                    if (ir(r)) return !1;
                                    o = !0
                                }
                            } else {
                                const u = 8 & r ? l : t[++a];
                                if (8 & r && null !== e.attrs) {
                                    if (!tr(e.attrs, u, n)) {
                                        if (ir(r)) return !1;
                                        o = !0
                                    }
                                    continue
                                }
                                const c = or(8 & r ? "class" : l, s, nr(e), n);
                                if (-1 === c) {
                                    if (ir(r)) return !1;
                                    o = !0;
                                    continue
                                }
                                if ("" !== u) {
                                    let e;
                                    e = c > i ? "" : s[c + 1].toLowerCase();
                                    const t = 8 & r ? e : null;
                                    if (t && -1 !== er(t, u, 0) || 2 & r && u !== e) {
                                        if (ir(r)) return !1;
                                        o = !0
                                    }
                                }
                            }
                    } else {
                        if (!o && !ir(r) && !ir(l)) return !1;
                        if (o && ir(l)) continue;
                        o = !1, r = l | 1 & r
                    }
                }
                return ir(r) || o
            }

            function ir(e) {
                return 0 == (1 & e)
            }

            function or(e, t, n, r) {
                if (null === t) return -1;
                let s = 0;
                if (r || !n) {
                    let n = !1;
                    for (; s < t.length;) {
                        const r = t[s];
                        if (r === e) return s;
                        if (3 === r || 6 === r) n = !0;
                        else {
                            if (1 === r || 2 === r) {
                                let e = t[++s];
                                for (;
                                    "string" == typeof e;) e = t[++s];
                                continue
                            }
                            if (4 === r) break;
                            if (0 === r) {
                                s += 4;
                                continue
                            }
                        }
                        s += n ? 1 : 2
                    }
                    return -1
                }
                return function(e, t) {
                    let n = e.indexOf(4);
                    if (n > -1)
                        for (n++; n < e.length;) {
                            const r = e[n];
                            if ("number" == typeof r) return -1;
                            if (r === t) return n;
                            n++
                        }
                    return -1
                }(t, e)
            }

            function ar(e, t, n = !1) {
                for (let r = 0; r < t.length; r++)
                    if (sr(e, t[r], n)) return !0;
                return !1
            }

            function lr(e, t) {
                return e ? ":not(" + t.trim() + ")" : t
            }

            function ur(e) {
                let t = e[0],
                    n = 1,
                    r = 2,
                    s = "",
                    i = !1;
                for (; n < e.length;) {
                    let o = e[n];
                    if ("string" == typeof o)
                        if (2 & r) {
                            const t = e[++n];
                            s += "[" + o + (t.length > 0 ? '="' + t + '"' : "") + "]"
                        } else 8 & r ? s += "." + o : 4 & r && (s += " " + o);
                    else "" === s || ir(o) || (t += lr(i, s), s = ""), r = o, i = i || !ir(r);
                    n++
                }
                return "" !== s && (t += lr(i, s)), t
            }
            const cr = {};

            function hr(e) {
                const t = e[3];
                return mt(t) ? t[3] : t
            }

            function dr(e) {
                fr(Ft(), jt(), tn() + e, $t())
            }

            function fr(e, t, n, r) {
                if (!r)
                    if (3 == (3 & t[2])) {
                        const r = e.preOrderCheckHooks;
                        null !== r && sn(t, r, n)
                    } else {
                        const r = e.preOrderHooks;
                        null !== r && on(t, r, 0, n)
                    } nn(n)
            }

            function pr(e, t) {
                const n = e.contentQueries;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2) {
                        const s = n[r],
                            i = n[r + 1];
                        if (-1 !== i) {
                            const n = e.data[i];
                            Wt(s), n.contentQueries(2, t[i], i)
                        }
                    }
            }

            function gr(e, t, n) {
                return Et(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
            }

            function mr(e, t, n, r, s, i, o, a, l, u) {
                const c = t.blueprint.slice();
                return c[0] = s, c[2] = 140 | r, Ot(c), c[3] = c[15] = e, c[8] = n, c[10] = o || e && e[10], c[11] = a || e && e[11], c[12] = l || e && e[12] || null, c[9] = u || e && e[9] || null, c[6] = i, c[16] = 2 == t.type ? e[16] : c, c
            }

            function yr(e, t, n, r, s, i) {
                const o = n + 19,
                    a = e.data[o] || function(e, t, n, r, s, i) {
                        const o = Mt(),
                            a = Ht(),
                            l = a ? o : o && o.parent,
                            u = e.data[n] = Sr(0, l && l !== t ? l : null, r, n, s, i);
                        return null === e.firstChild && (e.firstChild = u), o && (!a || null != o.child || null === u.parent && 2 !== o.type ? a || (o.next = u) : o.child = u), u
                    }(e, t, o, r, s, i);
                return Vt(a, !0), a
            }

            function vr(e, t, n) {
                Gt(t, t[6]);
                try {
                    const r = e.viewQuery;
                    null !== r && qr(1, r, n);
                    const s = e.template;
                    null !== s && br(e, t, s, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && pr(e, t), e.staticViewQueries && qr(2, e.viewQuery, n);
                    const i = e.components;
                    null !== i && function(e, t) {
                        for (let n = 0; n < t.length; n++) Ur(e, t[n])
                    }(t, i)
                } catch (r) {
                    throw e.firstCreatePass && (e.incompleteFirstPass = !0), r
                } finally {
                    t[2] &= -5, en()
                }
            }

            function wr(e, t, n, r) {
                const s = t[2];
                if (256 == (256 & s)) return;
                Gt(t, t[6]);
                const i = $t();
                try {
                    Ot(t), Pt.lFrame.bindingIndex = e.bindingStartIndex, null !== n && br(e, t, n, 2, r);
                    const o = 3 == (3 & s);
                    if (!i)
                        if (o) {
                            const n = e.preOrderCheckHooks;
                            null !== n && sn(t, n, null)
                        } else {
                            const n = e.preOrderHooks;
                            null !== n && on(t, n, 0, null), an(t, 0)
                        } if (function(e) {
                            let t = e[13];
                            for (; null !== t;) {
                                let n;
                                if (mt(t) && (n = t[2]) >> 1 == -1) {
                                    for (let e = 9; e < t.length; e++) {
                                        const n = t[e],
                                            r = n[1];
                                        Dt(n) && wr(r, n, r.template, n[8])
                                    }
                                    0 != (1 & n) && $r(t, e[16])
                                }
                                t = t[4]
                            }
                        }(t), null !== e.contentQueries && pr(e, t), !i)
                        if (o) {
                            const n = e.contentCheckHooks;
                            null !== n && sn(t, n)
                        } else {
                            const n = e.contentHooks;
                            null !== n && on(t, n, 1), an(t, 1)
                        }!
                    function(e, t) {
                        try {
                            const n = e.expandoInstructions;
                            if (null !== n) {
                                let r = e.expandoStartIndex,
                                    s = -1,
                                    i = -1;
                                for (let e = 0; e < n.length; e++) {
                                    const o = n[e];
                                    "number" == typeof o ? o <= 0 ? (i = 0 - o, nn(i), r += 9 + n[++e], s = r) : r += o : (null !== o && (Zt(r, s), o(2, t[s])), s++)
                                }
                            }
                        } finally {
                            nn(-1)
                        }
                    }(e, t);
                    const a = e.components;
                    null !== a && function(e, t) {
                        for (let n = 0; n < t.length; n++) zr(e, t[n])
                    }(t, a);
                    const l = e.viewQuery;
                    if (null !== l && qr(2, l, r), !i)
                        if (o) {
                            const n = e.viewCheckHooks;
                            null !== n && sn(t, n)
                        } else {
                            const n = e.viewHooks;
                            null !== n && on(t, n, 2), an(t, 2)
                        }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), i || (t[2] &= -73)
                } finally {
                    en()
                }
            }

            function _r(e, t, n, r) {
                const s = t[10],
                    i = !$t(),
                    o = 4 == (4 & t[2]);
                try {
                    i && !o && s.begin && s.begin(), o && vr(e, t, r), wr(e, t, n, r)
                } finally {
                    i && !o && s.end && s.end()
                }
            }

            function br(e, t, n, r, s) {
                const i = tn();
                try {
                    nn(-1), 2 & r && t.length > 19 && fr(e, t, 0, $t()), n(r, s)
                } finally {
                    nn(i)
                }
            }

            function Cr(e, t, n) {
                Lt() && (function(e, t, n, r) {
                    const s = n.directiveStart,
                        i = n.directiveEnd;
                    e.firstCreatePass || Sn(n, t), Jn(r, t);
                    const o = n.initialInputs;
                    for (let a = s; a < i; a++) {
                        const r = e.data[a],
                            i = _t(r);
                        i && Fr(t, n, r);
                        const l = Pn(t, e, a, n);
                        Jn(l, t), null !== o && Mr(0, a - s, l, r, 0, o), i && (Nt(n.index, t)[8] = l)
                    }
                }(e, t, n, St(n, t)), 128 == (128 & n.flags) && function(e, t, n) {
                    const r = n.directiveStart,
                        s = n.directiveEnd,
                        i = e.expandoInstructions,
                        o = e.firstCreatePass,
                        a = n.index - 19,
                        l = Pt.lFrame.currentDirectiveIndex;
                    try {
                        nn(a);
                        for (let n = r; n < s; n++) {
                            const r = e.data[n],
                                s = t[n];
                            Kt(n), null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? Dr(r, s) : o && i.push(null)
                        }
                    } finally {
                        nn(-1), Kt(l)
                    }
                }(e, t, n))
            }

            function Er(e, t, n = St) {
                const r = t.localNames;
                if (null !== r) {
                    let s = t.index + 1;
                    for (let i = 0; i < r.length; i += 2) {
                        const o = r[i + 1],
                            a = -1 === o ? n(t, e) : e[o];
                        e[s++] = a
                    }
                }
            }

            function xr(e) {
                const t = e.tView;
                return null === t || t.incompleteFirstPass ? e.tView = Tr(1, -1, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
            }

            function Tr(e, t, n, r, s, i, o, a, l, u) {
                const c = 19 + r,
                    h = c + s,
                    d = function(e, t) {
                        const n = [];
                        for (let r = 0; r < t; r++) n.push(r < e ? null : cr);
                        return n
                    }(c, h);
                return d[1] = {
                    type: e,
                    id: t,
                    blueprint: d,
                    template: n,
                    queries: null,
                    viewQuery: a,
                    node: null,
                    data: d.slice().fill(null, c),
                    bindingStartIndex: c,
                    expandoStartIndex: h,
                    expandoInstructions: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof i ? i() : i,
                    pipeRegistry: "function" == typeof o ? o() : o,
                    firstChild: null,
                    schemas: l,
                    consts: u,
                    incompleteFirstPass: !1
                }
            }

            function Sr(e, t, n, r, s, i) {
                return {
                    type: n,
                    index: r,
                    injectorIndex: t ? t.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    tagName: s,
                    attrs: i,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    residualStyles: void 0,
                    classes: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0
                }
            }

            function kr(e, t, n) {
                for (let r in e)
                    if (e.hasOwnProperty(r)) {
                        const s = e[r];
                        (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, s) : n[r] = [t, s]
                    } return n
            }

            function Ir(e, t, n, r) {
                let s = !1;
                if (Lt()) {
                    const i = function(e, t, n) {
                            const r = e.directiveRegistry;
                            let s = null;
                            if (r)
                                for (let i = 0; i < r.length; i++) {
                                    const o = r[i];
                                    ar(n, o.selectors, !1) && (s || (s = []), An(Sn(n, t), e, o.type), _t(o) ? (2 & n.flags && Qn(n), Or(e, n), s.unshift(o)) : s.push(o))
                                }
                            return s
                        }(e, t, n),
                        o = null === r ? null : {
                            "": -1
                        };
                    if (null !== i) {
                        let r = 0;
                        s = !0, Lr(n, e.data.length, i.length);
                        for (let e = 0; e < i.length; e++) {
                            const t = i[e];
                            t.providersResolver && t.providersResolver(t)
                        }
                        Rr(e, n, i.length);
                        let a = !1,
                            l = !1;
                        for (let s = 0; s < i.length; s++) {
                            const u = i[s];
                            n.mergedAttrs = fn(n.mergedAttrs, u.hostAttrs), jr(e, t, u), Pr(e.data.length - 1, u, o), null !== u.contentQueries && (n.flags |= 8), null === u.hostBindings && null === u.hostAttrs && 0 === u.hostVars || (n.flags |= 128), !a && (u.onChanges || u.onInit || u.doCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - 19), a = !0), l || !u.onChanges && !u.doCheck || ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index - 19), l = !0), Nr(e, u), r += u.hostVars
                        }! function(e, t) {
                            const n = t.directiveEnd,
                                r = e.data,
                                s = t.attrs,
                                i = [];
                            let o = null,
                                a = null;
                            for (let l = t.directiveStart; l < n; l++) {
                                const e = r[l],
                                    n = e.inputs,
                                    u = null === s || nr(t) ? null : Vr(n, s);
                                i.push(u), o = kr(n, l, o), a = kr(e.outputs, l, a)
                            }
                            null !== o && (o.hasOwnProperty("class") && (t.flags |= 16), o.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = i, t.inputs = o, t.outputs = a
                        }(e, n), Ar(e, t, r)
                    }
                    o && function(e, t, n) {
                        if (t) {
                            const r = e.localNames = [];
                            for (let e = 0; e < t.length; e += 2) {
                                const s = n[t[e + 1]];
                                if (null == s) throw new Error(`Export of name '${t[e+1]}' not found!`);
                                r.push(t[e], s)
                            }
                        }
                    }(n, r, o)
                }
                return n.mergedAttrs = fn(n.mergedAttrs, n.attrs), s
            }

            function Nr(e, t) {
                const n = e.expandoInstructions;
                n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars)
            }

            function Ar(e, t, n) {
                for (let r = 0; r < n; r++) t.push(cr), e.blueprint.push(cr), e.data.push(null)
            }

            function Dr(e, t) {
                null !== e.hostBindings && e.hostBindings(1, t)
            }

            function Rr(e, t, n) {
                const r = 19 - t.index,
                    s = e.data.length - (65535 & t.providerIndexes);
                (e.expandoInstructions || (e.expandoInstructions = [])).push(r, s, n)
            }

            function Or(e, t) {
                t.flags |= 2, (e.components || (e.components = [])).push(t.index)
            }

            function Pr(e, t, n) {
                if (n) {
                    if (t.exportAs)
                        for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                    _t(t) && (n[""] = e)
                }
            }

            function Lr(e, t, n) {
                e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
            }

            function jr(e, t, n) {
                e.data.push(n);
                const r = n.factory || (n.factory = ft(n.type)),
                    s = new cn(r, _t(n), null);
                e.blueprint.push(s), t.push(s)
            }

            function Fr(e, t, n) {
                const r = St(t, e),
                    s = xr(n),
                    i = e[10],
                    o = Br(e, mr(e, s, null, n.onPush ? 64 : 16, r, t, i, i.createRenderer(r, n)));
                e[t.index] = o
            }

            function Mr(e, t, n, r, s, i) {
                const o = i[t];
                if (null !== o) {
                    const e = r.setInput;
                    for (let t = 0; t < o.length;) {
                        const s = o[t++],
                            i = o[t++],
                            a = o[t++];
                        null !== e ? r.setInput(n, a, s, i) : n[i] = a
                    }
                }
            }

            function Vr(e, t) {
                let n = null,
                    r = 0;
                for (; r < t.length;) {
                    const s = t[r];
                    if (0 !== s)
                        if (5 !== s) {
                            if ("number" == typeof s) break;
                            e.hasOwnProperty(s) && (null === n && (n = []), n.push(s, e[s], t[r + 1])), r += 2
                        } else r += 2;
                    else r += 4
                }
                return n
            }

            function Hr(e, t, n, r) {
                return new Array(e, !0, -2, t, null, null, r, n, null)
            }

            function $r(e, t) {
                const n = e[5];
                for (let r = 0; r < n.length; r++) {
                    const e = n[r],
                        s = e[3][3][16];
                    if (s !== t && 0 == (16 & s[2])) {
                        const t = e[1];
                        wr(t, e, t.template, e[8])
                    }
                }
            }

            function zr(e, t) {
                const n = Nt(t, e);
                if (Dt(n) && 80 & n[2]) {
                    const e = n[1];
                    wr(e, n, e.template, n[8])
                }
            }

            function Ur(e, t) {
                const n = Nt(t, e),
                    r = n[1];
                ! function(e, t) {
                    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
                }(r, n), vr(r, n, n[8])
            }

            function Br(e, t) {
                return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
            }

            function Zr(e) {
                for (; e;) {
                    e[2] |= 64;
                    const t = hr(e);
                    if (bt(e) && !t) return e;
                    e = t
                }
                return null
            }

            function Kr(e, t, n) {
                const r = t[10];
                r.begin && r.begin();
                try {
                    wr(e, t, e.template, n)
                } catch (s) {
                    throw Jr(t, s), s
                } finally {
                    r.end && r.end()
                }
            }

            function Wr(e) {
                ! function(e) {
                    for (let t = 0; t < e.components.length; t++) {
                        const n = e.components[t],
                            r = At(n),
                            s = r[1];
                        _r(s, r, s.template, n)
                    }
                }(e[8])
            }

            function qr(e, t, n) {
                Wt(0), t(e, n)
            }
            const Gr = (() => Promise.resolve(null))();

            function Yr(e) {
                return e[7] || (e[7] = [])
            }

            function Jr(e, t) {
                const n = e[9],
                    r = n ? n.get(zn, null) : null;
                r && r.handleError(t)
            }

            function Qr(e, t, n, r, s) {
                for (let i = 0; i < n.length;) {
                    const o = n[i++],
                        a = n[i++],
                        l = t[o],
                        u = e.data[o];
                    null !== u.setInput ? u.setInput(l, s, r, a) : l[a] = s
                }
            }

            function Xr(e, t) {
                const n = t[3];
                return -1 === e.index ? mt(n) ? n : null : n
            }

            function es(e, t) {
                const n = Xr(e, t);
                return n ? hs(t[11], n[7]) : null
            }

            function ts(e, t, n, r, s) {
                if (null != r) {
                    let i, o = !1;
                    mt(r) ? i = r : gt(r) && (o = !0, r = r[0]);
                    const a = Tt(r);
                    0 === e && null !== n ? null == s ? us(t, n, a) : ls(t, n, a, s || null) : 1 === e && null !== n ? ls(t, n, a, s || null) : 2 === e ? function(e, t, n) {
                        const r = hs(e, t);
                        r && function(e, t, n, r) {
                            Et(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                        }(e, r, t, n)
                    }(t, a, o) : 3 === e && t.destroyNode(a), null != i && function(e, t, n, r, s) {
                        const i = n[7];
                        i !== Tt(n) && ts(t, e, r, i, s);
                        for (let o = 9; o < n.length; o++) {
                            const s = n[o];
                            gs(s[1], s, e, t, r, i)
                        }
                    }(t, e, i, n, s)
                }
            }

            function ns(e, t, n, r) {
                const s = es(e.node, t);
                s && gs(e, t, t[11], n ? 1 : 2, s, r)
            }

            function rs(e, t) {
                const n = e[5],
                    r = n.indexOf(t);
                n.splice(r, 1)
            }

            function ss(e, t) {
                if (e.length <= 9) return;
                const n = 9 + t,
                    r = e[n];
                if (r) {
                    const s = r[17];
                    null !== s && s !== e && rs(s, r), t > 0 && (e[n - 1][4] = r[4]);
                    const i = Qe(e, 9 + t);
                    ns(r[1], r, !1, null);
                    const o = i[5];
                    null !== o && o.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -129
                }
                return r
            }

            function is(e, t) {
                if (!(256 & t[2])) {
                    const n = t[11];
                    Et(n) && n.destroyNode && gs(e, t, n, 3, null, null),
                        function(e) {
                            let t = e[13];
                            if (!t) return as(e[1], e);
                            for (; t;) {
                                let n = null;
                                if (gt(t)) n = t[13];
                                else {
                                    const e = t[9];
                                    e && (n = e)
                                }
                                if (!n) {
                                    for (; t && !t[4] && t !== e;) gt(t) && as(t[1], t), t = os(t, e);
                                    null === t && (t = e), gt(t) && as(t[1], t), n = t && t[4]
                                }
                                t = n
                            }
                        }(t)
                }
            }

            function os(e, t) {
                let n;
                return gt(e) && (n = e[6]) && 2 === n.type ? Xr(n, e) : e[3] === t ? null : e[3]
            }

            function as(e, t) {
                if (!(256 & t[2])) {
                    t[2] &= -129, t[2] |= 256,
                        function(e, t) {
                            let n;
                            if (null != e && null != (n = e.destroyHooks))
                                for (let r = 0; r < n.length; r += 2) {
                                    const e = t[n[r]];
                                    if (!(e instanceof cn)) {
                                        const t = n[r + 1];
                                        if (Array.isArray(t))
                                            for (let n = 0; n < t.length; n += 2) t[n + 1].call(e[t[n]]);
                                        else t.call(e)
                                    }
                                }
                        }(e, t),
                        function(e, t) {
                            const n = e.cleanup;
                            if (null !== n) {
                                const e = t[7];
                                for (let r = 0; r < n.length - 1; r += 2)
                                    if ("string" == typeof n[r]) {
                                        const s = n[r + 1],
                                            i = "function" == typeof s ? s(t) : Tt(t[s]),
                                            o = e[n[r + 2]],
                                            a = n[r + 3];
                                        "boolean" == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? e[a]() : e[-a].unsubscribe(), r += 2
                                    } else n[r].call(e[n[r + 1]]);
                                t[7] = null
                            }
                        }(e, t);
                    const n = t[6];
                    n && 3 === n.type && Et(t[11]) && t[11].destroy();
                    const r = t[17];
                    if (null !== r && mt(t[3])) {
                        r !== t[3] && rs(r, t);
                        const n = t[5];
                        null !== n && n.detachView(e)
                    }
                }
            }

            function ls(e, t, n, r) {
                Et(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0)
            }

            function us(e, t, n) {
                Et(e) ? e.appendChild(t, n) : t.appendChild(n)
            }

            function cs(e, t, n, r) {
                null !== r ? ls(e, t, n, r) : us(e, t, n)
            }

            function hs(e, t) {
                return Et(e) ? e.parentNode(t) : t.parentNode
            }

            function ds(e, t, n, r) {
                const s = function(e, t, n) {
                    let r = t.parent;
                    for (; null != r && (4 === r.type || 5 === r.type);) r = (t = r).parent;
                    if (null == r) {
                        const e = n[6];
                        return 2 === e.type ? es(e, n) : n[0]
                    }
                    if (t && 5 === t.type && 4 & t.flags) return St(t, n).parentNode;
                    if (2 & r.flags) {
                        const t = e.data,
                            n = t[t[r.index].directiveStart].encapsulation;
                        if (n !== et.ShadowDom && n !== et.Native) return null
                    }
                    return St(r, n)
                }(e, r, t);
                if (null != s) {
                    const e = t[11],
                        i = function(e, t) {
                            if (2 === e.type) {
                                const n = Xr(e, t);
                                return null === n ? null : fs(n.indexOf(t, 9) - 9, n)
                            }
                            return 4 === e.type || 5 === e.type ? St(e, t) : null
                        }(r.parent || t[6], t);
                    if (Array.isArray(n))
                        for (let t = 0; t < n.length; t++) cs(e, s, n[t], i);
                    else cs(e, s, n, i)
                }
            }

            function fs(e, t) {
                const n = 9 + e + 1;
                if (n < t.length) {
                    const e = t[n],
                        r = e[1].firstChild;
                    if (null !== r) return function e(t, n) {
                        if (null !== n) {
                            const r = n.type;
                            if (3 === r) return St(n, t);
                            if (0 === r) return fs(-1, t[n.index]);
                            if (4 === r || 5 === r) {
                                const r = n.child;
                                if (null !== r) return e(t, r); {
                                    const e = t[n.index];
                                    return mt(e) ? fs(-1, e) : Tt(e)
                                }
                            } {
                                const r = t[16],
                                    s = r[6],
                                    i = hr(r),
                                    o = s.projection[n.projection];
                                return null != o ? e(i, o) : e(t, n.next)
                            }
                        }
                        return null
                    }(e, r)
                }
                return t[7]
            }

            function ps(e, t, n, r, s, i, o) {
                for (; null != n;) {
                    const a = r[n.index],
                        l = n.type;
                    o && 0 === t && (a && Jn(Tt(a), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (ps(e, t, n.child, r, s, i, !1), ts(t, e, s, a, i)) : 1 === l ? ms(e, t, r, n, s, i) : ts(t, e, s, a, i)), n = o ? n.projectionNext : n.next
                }
            }

            function gs(e, t, n, r, s, i) {
                ps(n, r, e.node.child, t, s, i, !1)
            }

            function ms(e, t, n, r, s, i) {
                const o = n[16],
                    a = o[6].projection[r.projection];
                if (Array.isArray(a))
                    for (let l = 0; l < a.length; l++) ts(t, e, s, a[l], i);
                else ps(e, t, a, o[3], s, i, !0)
            }

            function ys(e, t, n) {
                Et(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
            }

            function vs(e, t, n) {
                Et(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
            }
            class ws {
                constructor(e, t) {
                    this._lView = e, this._cdRefInjectingView = t, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
                }
                get rootNodes() {
                    const e = this._lView;
                    return null == e[0] ? function e(t, n, r, s, i = !1) {
                        for (; null !== r;) {
                            const o = n[r.index];
                            if (null !== o && s.push(Tt(o)), mt(o))
                                for (let t = 9; t < o.length; t++) {
                                    const n = o[t],
                                        r = n[1].firstChild;
                                    null !== r && e(n[1], n, r, s)
                                }
                            const a = r.type;
                            if (4 === a || 5 === a) e(t, n, r.child, s);
                            else if (1 === a) {
                                const t = n[16],
                                    i = t[6],
                                    o = hr(t);
                                let a = i.projection[r.projection];
                                null !== a && null !== o && e(o[1], o, a, s, !0)
                            }
                            r = i ? r.projectionNext : r.next
                        }
                        return s
                    }(e[1], e, e[6].child, []) : []
                }
                get context() {
                    return this._lView[8]
                }
                get destroyed() {
                    return 256 == (256 & this._lView[2])
                }
                destroy() {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._viewContainerRef) {
                        const e = this._viewContainerRef.indexOf(this);
                        e > -1 && this._viewContainerRef.detach(e), this._viewContainerRef = null
                    }
                    is(this._lView[1], this._lView)
                }
                onDestroy(e) {
                    var t, n, r;
                    t = this._lView[1], r = e, Yr(n = this._lView).push(r), t.firstCreatePass && function(e) {
                        return e.cleanup || (e.cleanup = [])
                    }(t).push(n[7].length - 1, null)
                }
                markForCheck() {
                    Zr(this._cdRefInjectingView || this._lView)
                }
                detach() {
                    this._lView[2] &= -129
                }
                reattach() {
                    this._lView[2] |= 128
                }
                detectChanges() {
                    Kr(this._lView[1], this._lView, this.context)
                }
                checkNoChanges() {
                    ! function(e, t, n) {
                        zt(!0);
                        try {
                            Kr(e, t, n)
                        } finally {
                            zt(!1)
                        }
                    }(this._lView[1], this._lView, this.context)
                }
                attachToViewContainerRef(e) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = e
                }
                detachFromAppRef() {
                    var e;
                    this._appRef = null, gs(this._lView[1], e = this._lView, e[11], 2, null, null)
                }
                attachToAppRef(e) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = e
                }
            }
            class _s extends ws {
                constructor(e) {
                    super(e), this._view = e
                }
                detectChanges() {
                    Wr(this._view)
                }
                checkNoChanges() {
                    ! function(e) {
                        zt(!0);
                        try {
                            Wr(e)
                        } finally {
                            zt(!1)
                        }
                    }(this._view)
                }
                get context() {
                    return null
                }
            }
            let bs, Cs, Es;

            function xs(e, t, n) {
                return bs || (bs = class extends e {}), new bs(St(t, n))
            }

            function Ts(e, t, n, r) {
                return Cs || (Cs = class extends e {
                    constructor(e, t, n) {
                        super(), this._declarationView = e, this._declarationTContainer = t, this.elementRef = n
                    }
                    createEmbeddedView(e) {
                        const t = this._declarationTContainer.tViews,
                            n = mr(this._declarationView, t, e, 16, null, t.node);
                        n[17] = this._declarationView[this._declarationTContainer.index];
                        const r = this._declarationView[5];
                        null !== r && (n[5] = r.createEmbeddedView(t)), vr(t, n, e);
                        const s = new ws(n);
                        return s._tViewNode = n[6], s
                    }
                }), 0 === n.type ? new Cs(r, n, xs(t, n, r)) : null
            }
            const Ss = new Le("Set Injector scope."),
                ks = {},
                Is = {},
                Ns = [];
            let As = void 0;

            function Ds() {
                return void 0 === As && (As = new qe), As
            }

            function Rs(e, t = null, n = null, r) {
                return new Os(e, n, t || Ds(), r)
            }
            class Os {
                constructor(e, t, n, r = null) {
                    this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                    const s = [];
                    t && Ye(t, n => this.processProvider(n, e, t)), Ye([e], e => this.processInjectorType(e, [], s)), this.records.set(je, Ls(void 0, this));
                    const i = this.records.get(Ss);
                    this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof e ? null : ye(e))
                }
                get destroyed() {
                    return this._destroyed
                }
                destroy() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach(e => e.ngOnDestroy())
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
                get(e, t = Fe, n = ie.Default) {
                    this.assertNotDestroyed();
                    const r = ze(this);
                    try {
                        if (!(n & ie.SkipSelf)) {
                            let t = this.records.get(e);
                            if (void 0 === t) {
                                const n = ("function" == typeof(s = e) || "object" == typeof s && s instanceof Le) && ue(e);
                                t = n && this.injectableDefInScope(n) ? Ls(Ps(e), ks) : null, this.records.set(e, t)
                            }
                            if (null != t) return this.hydrate(e, t)
                        }
                        return (n & ie.Self ? Ds() : this.parent).get(e, t = n & ie.Optional && t === Fe ? null : t)
                    } catch (i) {
                        if ("NullInjectorError" === i.name) {
                            if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(ye(e)), r) throw i;
                            return function(e, t, n, r) {
                                const s = e.ngTempTokenPath;
                                throw t.__source && s.unshift(t.__source), e.message = function(e, t, n, r = null) {
                                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                                    let s = ye(t);
                                    if (Array.isArray(t)) s = t.map(ye).join(" -> ");
                                    else if ("object" == typeof t) {
                                        let e = [];
                                        for (let n in t)
                                            if (t.hasOwnProperty(n)) {
                                                let r = t[n];
                                                e.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : ye(r)))
                                            } s = `{${e.join(", ")}}`
                                    }
                                    return `${n}${r?"("+r+")":""}[${s}]: ${e.replace(Me,"\n  ")}`
                                }("\n" + e.message, s, n, r), e.ngTokenPath = s, e.ngTempTokenPath = null, e
                            }(i, e, "R3InjectorError", this.source)
                        }
                        throw i
                    } finally {
                        ze(r)
                    }
                    var s
                }
                _resolveInjectorDefTypes() {
                    this.injectorDefTypes.forEach(e => this.get(e))
                }
                toString() {
                    const e = [];
                    return this.records.forEach((t, n) => e.push(ye(n))), `R3Injector[${e.join(", ")}]`
                }
                assertNotDestroyed() {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
                processInjectorType(e, t, n) {
                    if (!(e = be(e))) return !1;
                    let r = he(e);
                    const s = null == r && e.ngModule || void 0,
                        i = void 0 === s ? e : s,
                        o = -1 !== n.indexOf(i);
                    if (void 0 !== s && (r = he(s)), null == r) return !1;
                    if (null != r.imports && !o) {
                        let e;
                        n.push(i);
                        try {
                            Ye(r.imports, r => {
                                this.processInjectorType(r, t, n) && (void 0 === e && (e = []), e.push(r))
                            })
                        } finally {}
                        if (void 0 !== e)
                            for (let t = 0; t < e.length; t++) {
                                const {
                                    ngModule: n,
                                    providers: r
                                } = e[t];
                                Ye(r, e => this.processProvider(e, n, r || Ns))
                            }
                    }
                    this.injectorDefTypes.add(i), this.records.set(i, Ls(r.factory, ks));
                    const a = r.providers;
                    if (null != a && !o) {
                        const t = e;
                        Ye(a, e => this.processProvider(e, t, a))
                    }
                    return void 0 !== s && void 0 !== e.providers
                }
                processProvider(e, t, n) {
                    let r = Fs(e = be(e)) ? e : be(e && e.provide);
                    const s = function(e, t, n) {
                        return js(e) ? Ls(void 0, e.useValue) : Ls(function(e, t, n) {
                            let r = void 0;
                            if (Fs(e)) {
                                const t = be(e);
                                return ft(t) || Ps(t)
                            }
                            if (js(e)) r = () => be(e.useValue);
                            else if ((s = e) && s.useFactory) r = () => e.useFactory(...We(e.deps || []));
                            else if (function(e) {
                                    return !(!e || !e.useExisting)
                                }(e)) r = () => Ze(be(e.useExisting));
                            else {
                                const s = be(e && (e.useClass || e.provide));
                                if (s || function(e, t, n) {
                                        let r = "";
                                        throw e && t && (r = ` - only instances of Provider and Type are allowed, got: [${t.map(e=>e==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${ye(e)}'` + r)
                                    }(t, n, e), ! function(e) {
                                        return !!e.deps
                                    }(e)) return ft(s) || Ps(s);
                                r = () => new s(...We(e.deps))
                            }
                            var s;
                            return r
                        }(e, t, n), ks)
                    }(e, t, n);
                    if (Fs(e) || !0 !== e.multi) {
                        const e = this.records.get(r);
                        e && void 0 !== e.multi && Xn()
                    } else {
                        let t = this.records.get(r);
                        t ? void 0 === t.multi && Xn() : (t = Ls(void 0, ks, !0), t.factory = () => We(t.multi), this.records.set(r, t)), r = e, t.multi.push(e)
                    }
                    this.records.set(r, s)
                }
                hydrate(e, t) {
                    var n;
                    return t.value === Is ? function(e) {
                        throw new Error(`Cannot instantiate cyclic dependency! ${e}`)
                    }(ye(e)) : t.value === ks && (t.value = Is, t.value = t.factory()), "object" == typeof t.value && t.value && null !== (n = t.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), t.value
                }
                injectableDefInScope(e) {
                    return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || e.providedIn === this.scope : this.injectorDefTypes.has(e.providedIn))
                }
            }

            function Ps(e) {
                const t = ue(e),
                    n = null !== t ? t.factory : ft(e);
                if (null !== n) return n;
                const r = he(e);
                if (null !== r) return r.factory;
                if (e instanceof Le) throw new Error(`Token ${ye(e)} is missing a \u0275prov definition.`);
                if (e instanceof Function) return function(e) {
                    const t = e.length;
                    if (t > 0) {
                        const n = function(e, t) {
                            const n = [];
                            for (let r = 0; r < e; r++) n.push("?");
                            return n
                        }(t);
                        throw new Error(`Can't resolve all parameters for ${ye(e)}: (${n.join(", ")}).`)
                    }
                    const n = function(e) {
                        const t = e && (e[de] || e[ge] || e[pe] && e[pe]());
                        if (t) {
                            const n = function(e) {
                                if (e.hasOwnProperty("name")) return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in v10. Please add @Injectable() to the "${n}" class.`), t
                        }
                        return null
                    }(e);
                    return null !== n ? () => n.factory(e) : () => new e
                }(e);
                throw new Error("unreachable")
            }

            function Ls(e, t, n = !1) {
                return {
                    factory: e,
                    value: t,
                    multi: n ? [] : void 0
                }
            }

            function js(e) {
                return null !== e && "object" == typeof e && Ve in e
            }

            function Fs(e) {
                return "function" == typeof e
            }
            const Ms = function(e, t, n) {
                return function(e, t = null, n = null, r) {
                    const s = Rs(e, t, n, r);
                    return s._resolveInjectorDefTypes(), s
                }({
                    name: n
                }, t, e, n)
            };
            let Vs = (() => {
                    class e {
                        static create(e, t) {
                            return Array.isArray(e) ? Ms(e, t, "") : Ms(e.providers, e.parent, e.name || "")
                        }
                    }
                    return e.THROW_IF_NOT_FOUND = Fe, e.NULL = new qe, e.\u0275prov = ae({
                        token: e,
                        providedIn: "any",
                        factory: () => Ze(je)
                    }), e.__NG_ELEMENT_ID__ = -1, e
                })(),
                Hs = new Map;
            const $s = new Set;

            function zs(e) {
                return "string" == typeof e ? e : e.text()
            }

            function Us(e, t) {
                let n = e.styles,
                    r = e.classes,
                    s = 0;
                for (let i = 0; i < t.length; i++) {
                    const e = t[i];
                    "number" == typeof e ? s = e : 1 == s ? r = ve(r, e) : 2 == s && (n = ve(n, e + ": " + t[++i] + ";"))
                }
                null !== n && (e.styles = n), null !== r && (e.classes = r)
            }
            let Bs = null;

            function Zs() {
                if (!Bs) {
                    const e = ke.Symbol;
                    if (e && e.iterator) Bs = e.iterator;
                    else {
                        const e = Object.getOwnPropertyNames(Map.prototype);
                        for (let t = 0; t < e.length; ++t) {
                            const n = e[t];
                            "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Bs = n)
                        }
                    }
                }
                return Bs
            }

            function Ks(e, t) {
                return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
            }
            class Ws {
                constructor(e) {
                    this.wrapped = e
                }
                static wrap(e) {
                    return new Ws(e)
                }
                static unwrap(e) {
                    return Ws.isWrapped(e) ? e.wrapped : e
                }
                static isWrapped(e) {
                    return e instanceof Ws
                }
            }

            function qs(e) {
                return !!Gs(e) && (Array.isArray(e) || !(e instanceof Map) && Zs() in e)
            }

            function Gs(e) {
                return null !== e && ("function" == typeof e || "object" == typeof e)
            }

            function Ys(e, t, n) {
                return e[t] = n
            }

            function Js(e, t, n) {
                return !Object.is(e[t], n) && (e[t] = n, !0)
            }

            function Qs(e, t, n, r, s, i, o, a) {
                const l = jt(),
                    u = Ft(),
                    c = e + 19,
                    h = u.firstCreatePass ? function(e, t, n, r, s, i, o, a, l) {
                        const u = t.consts,
                            c = yr(t, n[6], e, 0, o || null, Rt(u, a));
                        Ir(t, n, c, Rt(u, l)), rn(t, c);
                        const h = c.tViews = Tr(2, -1, r, s, i, t.directiveRegistry, t.pipeRegistry, null, t.schemas, u),
                            d = Sr(0, null, 2, -1, null, null);
                        return d.injectorIndex = c.injectorIndex, h.node = d, null !== t.queries && (t.queries.template(t, c), h.queries = t.queries.embeddedTView(c)), c
                    }(e, u, l, t, n, r, s, i, o) : u.data[c];
                Vt(h, !1);
                const d = l[11].createComment("");
                ds(u, l, d, h), Jn(d, l), Br(l, l[c] = Hr(d, l, d, h)), wt(h) && Cr(u, l, h), null != o && Er(l, h, a)
            }

            function Xs(e, t = ie.Default) {
                const n = jt();
                return null == n ? Ze(e, t) : Dn(Mt(), n, be(e), t)
            }

            function ei(e, t, n) {
                const r = jt();
                return Js(r, Bt(), t) && function(e, t, n, r, s, i, o, a) {
                    const l = St(t, n);
                    let u, c = t.inputs;
                    var h;
                    null != c && (u = c[r]) ? (Qr(e, n, u, r, s), vt(t) && function(e, t) {
                        const n = Nt(t, e);
                        16 & n[2] || (n[2] |= 64)
                    }(n, t.index)) : 3 === t.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, t.tagName || "", r) : s, Et(i) ? i.setProperty(l, r, s) : dn(r) || (l.setProperty ? l.setProperty(r, s) : l[r] = s))
                }(Ft(), function() {
                    const e = Pt.lFrame;
                    return kt(e.tView, e.selectedIndex)
                }(), r, e, t, r[11], n), ei
            }

            function ti(e, t, n, r, s) {
                const i = s ? "class" : "style";
                Qr(e, n, t.inputs[i], i, r)
            }

            function ni(e, t, n, r) {
                const s = jt(),
                    i = Ft(),
                    o = 19 + e,
                    a = s[11],
                    l = s[o] = gr(t, a, Pt.lFrame.currentNamespace),
                    u = i.firstCreatePass ? function(e, t, n, r, s, i, o) {
                        const a = t.consts,
                            l = Rt(a, i),
                            u = yr(t, n[6], e, 3, s, l);
                        return Ir(t, n, u, Rt(a, o)), null !== u.mergedAttrs && Us(u, u.mergedAttrs), null !== t.queries && t.queries.elementStart(t, u), u
                    }(e, i, s, 0, t, n, r) : i.data[o];
                Vt(u, !0);
                const c = u.mergedAttrs;
                null !== c && hn(a, l, c);
                const h = u.classes;
                null !== h && vs(a, l, h);
                const d = u.styles;
                null !== d && ys(a, l, d), ds(i, s, l, u), 0 === Pt.lFrame.elementDepthCount && Jn(l, s), Pt.lFrame.elementDepthCount++, wt(u) && (Cr(i, s, u), function(e, t, n) {
                    if (yt(t)) {
                        const r = t.directiveEnd;
                        for (let s = t.directiveStart; s < r; s++) {
                            const t = e.data[s];
                            t.contentQueries && t.contentQueries(1, n[s], s)
                        }
                    }
                }(i, u, s)), null !== r && Er(s, u)
            }

            function ri() {
                let e = Mt();
                Ht() ? Pt.lFrame.isParent = !1 : (e = e.parent, Vt(e, !1));
                const t = e;
                Pt.lFrame.elementDepthCount--;
                const n = Ft();
                n.firstCreatePass && (rn(n, e), yt(e) && n.queries.elementEnd(e)), null !== t.classes && function(e) {
                    return 0 != (16 & e.flags)
                }(t) && ti(n, t, jt(), t.classes, !0), null !== t.styles && function(e) {
                    return 0 != (32 & e.flags)
                }(t) && ti(n, t, jt(), t.styles, !1)
            }

            function si(e, t, n, r) {
                ni(e, t, n, r), ri()
            }

            function ii(e) {
                return !!e && "function" == typeof e.then
            }

            function oi(e, t, n = !1, r) {
                const s = jt(),
                    i = Ft(),
                    o = Mt();
                return function(e, t, n, r, s, i, o = !1, a) {
                    const l = wt(r),
                        u = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
                        c = Yr(t);
                    let h = !0;
                    if (3 === r.type) {
                        const d = St(r, t),
                            f = a ? a(d) : tt,
                            p = f.target || d,
                            g = c.length,
                            m = a ? e => a(Tt(e[r.index])).target : r.index;
                        if (Et(n)) {
                            let o = null;
                            if (!a && l && (o = function(e, t, n, r) {
                                    const s = e.cleanup;
                                    if (null != s)
                                        for (let i = 0; i < s.length - 1; i += 2) {
                                            const e = s[i];
                                            if (e === n && s[i + 1] === r) {
                                                const e = t[7],
                                                    n = s[i + 2];
                                                return e.length > n ? e[n] : null
                                            }
                                            "string" == typeof e && (i += 2)
                                        }
                                    return null
                                }(e, t, s, r.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i, o.__ngLastListenerFn__ = i, h = !1;
                            else {
                                i = li(r, t, i, !1);
                                const e = n.listen(f.name || p, s, i);
                                c.push(i, e), u && u.push(s, m, g, g + 1)
                            }
                        } else i = li(r, t, i, !0), p.addEventListener(s, i, o), c.push(i), u && u.push(s, m, g, o)
                    }
                    const d = r.outputs;
                    let f;
                    if (h && null !== d && (f = d[s])) {
                        const e = f.length;
                        if (e)
                            for (let n = 0; n < e; n += 2) {
                                const e = t[f[n]][f[n + 1]].subscribe(i),
                                    o = c.length;
                                c.push(i, e), u && u.push(s, r.index, o, -(o + 1))
                            }
                    }
                }(i, s, s[11], o, e, t, n, r), oi
            }

            function ai(e, t, n) {
                try {
                    return !1 !== t(n)
                } catch (r) {
                    return Jr(e, r), !1
                }
            }

            function li(e, t, n, r) {
                return function s(i) {
                    if (i === Function) return n;
                    const o = 2 & e.flags ? Nt(e.index, t) : t;
                    0 == (32 & t[2]) && Zr(o);
                    let a = ai(t, n, i),
                        l = s.__ngNextListenerFn__;
                    for (; l;) a = ai(t, l, i) && a, l = l.__ngNextListenerFn__;
                    return r && !1 === a && (i.preventDefault(), i.returnValue = !1), a
                }
            }

            function ui(e = 1) {
                return function(e) {
                    return (Pt.lFrame.contextLView = function(e, t) {
                        for (; e > 0;) t = t[15], e--;
                        return t
                    }(e, Pt.lFrame.contextLView))[8]
                }(e)
            }

            function ci(e, t = "") {
                const n = jt(),
                    r = Ft(),
                    s = e + 19,
                    i = r.firstCreatePass ? yr(r, n[6], e, 3, null, null) : r.data[s],
                    o = n[s] = function(e, t) {
                        return Et(t) ? t.createText(e) : t.createTextNode(e)
                    }(t, n[11]);
                ds(r, n, o, i), Vt(i, !1)
            }

            function hi(e, t, n) {
                const r = jt(),
                    s = function(e, t, n, r) {
                        return Js(e, Bt(), n) ? t + wn(n) + r : cr
                    }(r, e, t, n);
                return s !== cr && function(e, t, n) {
                    const r = function(e, t) {
                            return Tt(t[e + 19])
                        }(t, e),
                        s = e[11];
                    Et(s) ? s.setValue(r, n) : r.textContent = n
                }(r, tn(), s), hi
            }

            function di(e, t) {
                const n = At(e)[1],
                    r = n.data.length - 1;
                rn(n, {
                    directiveStart: r,
                    directiveEnd: r + 1
                })
            }
            class fi {
                constructor(e, t, n) {
                    this.previousValue = e, this.currentValue = t, this.firstChange = n
                }
                isFirstChange() {
                    return this.firstChange
                }
            }
            class pi {}
            class gi {
                resolveComponentFactory(e) {
                    throw function(e) {
                        const t = Error(`No component factory found for ${ye(e)}. Did you add it to @NgModule.entryComponents?`);
                        return t.ngComponent = e, t
                    }(e)
                }
            }
            let mi = (() => {
                    class e {}
                    return e.NULL = new gi, e
                })(),
                yi = (() => {
                    class e {
                        constructor(e) {
                            this.nativeElement = e
                        }
                    }
                    return e.__NG_ELEMENT_ID__ = () => vi(e), e
                })();
            const vi = function(e) {
                return xs(e, Mt(), jt())
            };
            class wi {}
            const _i = function() {
                var e = {
                    Important: 1,
                    DashCase: 2
                };
                return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e
            }();
            let bi = (() => {
                class e {}
                return e.\u0275prov = ae({
                    token: e,
                    providedIn: "root",
                    factory: () => null
                }), e
            })();
            class Ci {
                constructor(e) {
                    this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
                }
            }
            const Ei = new Ci("9.1.4");
            class xi {
                constructor() {}
                supports(e) {
                    return qs(e)
                }
                create(e) {
                    return new Si(e)
                }
            }
            const Ti = (e, t) => t;
            class Si {
                constructor(e) {
                    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Ti
                }
                forEachItem(e) {
                    let t;
                    for (t = this._itHead; null !== t; t = t._next) e(t)
                }
                forEachOperation(e) {
                    let t = this._itHead,
                        n = this._removalsHead,
                        r = 0,
                        s = null;
                    for (; t || n;) {
                        const i = !n || t && t.currentIndex < Ai(n, r, s) ? t : n,
                            o = Ai(i, r, s),
                            a = i.currentIndex;
                        if (i === n) r--, n = n._nextRemoved;
                        else if (t = t._next, null == i.previousIndex) r++;
                        else {
                            s || (s = []);
                            const e = o - r,
                                t = a - r;
                            if (e != t) {
                                for (let n = 0; n < e; n++) {
                                    const r = n < s.length ? s[n] : s[n] = 0,
                                        i = r + n;
                                    t <= i && i < e && (s[n] = r + 1)
                                }
                                s[i.previousIndex] = t - e
                            }
                        }
                        o !== a && e(i, o, a)
                    }
                }
                forEachPreviousItem(e) {
                    let t;
                    for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
                }
                forEachAddedItem(e) {
                    let t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }
                forEachMovedItem(e) {
                    let t;
                    for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
                }
                forEachRemovedItem(e) {
                    let t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }
                forEachIdentityChange(e) {
                    let t;
                    for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
                }
                diff(e) {
                    if (null == e && (e = []), !qs(e)) throw new Error(`Error trying to diff '${ye(e)}'. Only arrays and iterables are allowed`);
                    return this.check(e) ? this : null
                }
                onDestroy() {}
                check(e) {
                    this._reset();
                    let t, n, r, s = this._itHead,
                        i = !1;
                    if (Array.isArray(e)) {
                        this.length = e.length;
                        for (let t = 0; t < this.length; t++) n = e[t], r = this._trackByFn(t, n), null !== s && Ks(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, t)), Ks(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, t), i = !0), s = s._next
                    } else t = 0,
                        function(e, t) {
                            if (Array.isArray(e))
                                for (let n = 0; n < e.length; n++) t(e[n]);
                            else {
                                const n = e[Zs()]();
                                let r;
                                for (; !(r = n.next()).done;) t(r.value)
                            }
                        }(e, e => {
                            r = this._trackByFn(t, e), null !== s && Ks(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, e, r, t)), Ks(s.item, e) || this._addIdentityChange(s, e)) : (s = this._mismatch(s, e, r, t), i = !0), s = s._next, t++
                        }), this.length = t;
                    return this._truncate(s), this.collection = e, this.isDirty
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
                _reset() {
                    if (this.isDirty) {
                        let e, t;
                        for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
                _mismatch(e, t, n, r) {
                    let s;
                    return null === e ? s = this._itTail : (s = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Ks(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, s, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ks(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, s, r)) : e = this._addAfter(new ki(t, n), s, r), e
                }
                _verifyReinsertion(e, t, n, r) {
                    let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                    return null !== s ? e = this._reinsertAfter(s, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
                }
                _truncate(e) {
                    for (; null !== e;) {
                        const t = e._next;
                        this._addToRemovals(this._unlink(e)), e = t
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
                _reinsertAfter(e, t, n) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                    const r = e._prevRemoved,
                        s = e._nextRemoved;
                    return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
                }
                _moveAfter(e, t, n) {
                    return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
                }
                _addAfter(e, t, n) {
                    return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
                }
                _insertAfter(e, t, n) {
                    const r = null === t ? this._itHead : t._next;
                    return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new Ni), this._linkedRecords.put(e), e.currentIndex = n, e
                }
                _remove(e) {
                    return this._addToRemovals(this._unlink(e))
                }
                _unlink(e) {
                    null !== this._linkedRecords && this._linkedRecords.remove(e);
                    const t = e._prev,
                        n = e._next;
                    return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
                }
                _addToMoves(e, t) {
                    return e.previousIndex === t || (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e), e
                }
                _addToRemovals(e) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new Ni), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
                }
                _addIdentityChange(e, t) {
                    return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
                }
            }
            class ki {
                constructor(e, t) {
                    this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                }
            }
            class Ii {
                constructor() {
                    this._head = null, this._tail = null
                }
                add(e) {
                    null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
                }
                get(e, t) {
                    let n;
                    for (n = this._head; null !== n; n = n._nextDup)
                        if ((null === t || t <= n.currentIndex) && Ks(n.trackById, e)) return n;
                    return null
                }
                remove(e) {
                    const t = e._prevDup,
                        n = e._nextDup;
                    return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
                }
            }
            class Ni {
                constructor() {
                    this.map = new Map
                }
                put(e) {
                    const t = e.trackById;
                    let n = this.map.get(t);
                    n || (n = new Ii, this.map.set(t, n)), n.add(e)
                }
                get(e, t) {
                    const n = this.map.get(e);
                    return n ? n.get(e, t) : null
                }
                remove(e) {
                    const t = e.trackById;
                    return this.map.get(t).remove(e) && this.map.delete(t), e
                }
                get isEmpty() {
                    return 0 === this.map.size
                }
                clear() {
                    this.map.clear()
                }
            }

            function Ai(e, t, n) {
                const r = e.previousIndex;
                if (null === r) return r;
                let s = 0;
                return n && r < n.length && (s = n[r]), r + t + s
            }
            class Di {
                constructor() {}
                supports(e) {
                    return e instanceof Map || Gs(e)
                }
                create() {
                    return new Ri
                }
            }
            class Ri {
                constructor() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
                forEachItem(e) {
                    let t;
                    for (t = this._mapHead; null !== t; t = t._next) e(t)
                }
                forEachPreviousItem(e) {
                    let t;
                    for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
                }
                forEachChangedItem(e) {
                    let t;
                    for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
                }
                forEachAddedItem(e) {
                    let t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }
                forEachRemovedItem(e) {
                    let t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }
                diff(e) {
                    if (e) {
                        if (!(e instanceof Map || Gs(e))) throw new Error(`Error trying to diff '${ye(e)}'. Only maps and objects are allowed`)
                    } else e = new Map;
                    return this.check(e) ? this : null
                }
                onDestroy() {}
                check(e) {
                    this._reset();
                    let t = this._mapHead;
                    if (this._appendAfter = null, this._forEach(e, (e, n) => {
                            if (t && t.key === n) this._maybeAddToChanges(t, e), this._appendAfter = t, t = t._next;
                            else {
                                const r = this._getOrCreateRecordForKey(n, e);
                                t = this._insertBeforeOrAppend(t, r)
                            }
                        }), t) {
                        t._prev && (t._prev._next = null), this._removalsHead = t;
                        for (let e = t; null !== e; e = e._nextRemoved) e === this._mapHead && (this._mapHead = null), this._records.delete(e.key), e._nextRemoved = e._next, e.previousValue = e.currentValue, e.currentValue = null, e._prev = null, e._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
                _insertBeforeOrAppend(e, t) {
                    if (e) {
                        const n = e._prev;
                        return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                    }
                    return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
                }
                _getOrCreateRecordForKey(e, t) {
                    if (this._records.has(e)) {
                        const n = this._records.get(e);
                        this._maybeAddToChanges(n, t);
                        const r = n._prev,
                            s = n._next;
                        return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n
                    }
                    const n = new Oi(e);
                    return this._records.set(e, n), n.currentValue = t, this._addToAdditions(n), n
                }
                _reset() {
                    if (this.isDirty) {
                        let e;
                        for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                        for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
                _maybeAddToChanges(e, t) {
                    Ks(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
                }
                _addToAdditions(e) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                }
                _addToChanges(e) {
                    null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                }
                _forEach(e, t) {
                    e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(n => t(e[n], n))
                }
            }
            class Oi {
                constructor(e) {
                    this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }
            let Pi = (() => {
                    class e {
                        constructor(e) {
                            this.factories = e
                        }
                        static create(t, n) {
                            if (null != n) {
                                const e = n.factories.slice();
                                t = t.concat(e)
                            }
                            return new e(t)
                        }
                        static extend(t) {
                            return {
                                provide: e,
                                useFactory: n => {
                                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                    return e.create(t, n)
                                },
                                deps: [
                                    [e, new se, new ne]
                                ]
                            }
                        }
                        find(e) {
                            const t = this.factories.find(t => t.supports(e));
                            if (null != t) return t;
                            throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);
                            var n
                        }
                    }
                    return e.\u0275prov = ae({
                        token: e,
                        providedIn: "root",
                        factory: () => new e([new xi])
                    }), e
                })(),
                Li = (() => {
                    class e {
                        constructor(e) {
                            this.factories = e
                        }
                        static create(t, n) {
                            if (n) {
                                const e = n.factories.slice();
                                t = t.concat(e)
                            }
                            return new e(t)
                        }
                        static extend(t) {
                            return {
                                provide: e,
                                useFactory: n => {
                                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                    return e.create(t, n)
                                },
                                deps: [
                                    [e, new se, new ne]
                                ]
                            }
                        }
                        find(e) {
                            const t = this.factories.find(t => t.supports(e));
                            if (t) return t;
                            throw new Error(`Cannot find a differ supporting object '${e}'`)
                        }
                    }
                    return e.\u0275prov = ae({
                        token: e,
                        providedIn: "root",
                        factory: () => new e([new Di])
                    }), e
                })();
            const ji = [new Di],
                Fi = new Pi([new xi]),
                Mi = new Li(ji);
            let Vi = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => Hi(e, yi), e
            })();
            const Hi = function(e, t) {
                return Ts(e, t, Mt(), jt())
            };
            let $i = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => zi(e, yi), e
            })();
            const zi = function(e, t) {
                    return function(e, t, n, r) {
                        let s;
                        Es || (Es = class extends e {
                            constructor(e, t, n) {
                                super(), this._lContainer = e, this._hostTNode = t, this._hostView = n
                            }
                            get element() {
                                return xs(t, this._hostTNode, this._hostView)
                            }
                            get injector() {
                                return new Fn(this._hostTNode, this._hostView)
                            }
                            get parentInjector() {
                                const e = Nn(this._hostTNode, this._hostView),
                                    t = vn(e, this._hostView),
                                    n = function(e, t, n) {
                                        if (n.parent && -1 !== n.parent.injectorIndex) {
                                            const e = n.parent.injectorIndex;
                                            let t = n.parent;
                                            for (; null != t.parent && e == t.parent.injectorIndex;) t = t.parent;
                                            return t
                                        }
                                        let r = yn(e),
                                            s = t,
                                            i = t[6];
                                        for (; r > 1;) s = s[15], i = s[6], r--;
                                        return i
                                    }(e, this._hostView, this._hostTNode);
                                return gn(e) && null != n ? new Fn(n, t) : new Fn(null, this._hostView)
                            }
                            clear() {
                                for (; this.length > 0;) this.remove(this.length - 1)
                            }
                            get(e) {
                                return null !== this._lContainer[8] && this._lContainer[8][e] || null
                            }
                            get length() {
                                return this._lContainer.length - 9
                            }
                            createEmbeddedView(e, t, n) {
                                const r = e.createEmbeddedView(t || {});
                                return this.insert(r, n), r
                            }
                            createComponent(e, t, n, r, s) {
                                const i = n || this.parentInjector;
                                if (!s && null == e.ngModule && i) {
                                    const e = i.get(Ge, null);
                                    e && (s = e)
                                }
                                const o = e.create(i, r, void 0, s);
                                return this.insert(o.hostView, t), o
                            }
                            insert(e, t) {
                                const n = e._lView,
                                    r = n[1];
                                if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                                if (this.allocateContainerIfNeeded(), mt(n[3])) {
                                    const t = this.indexOf(e);
                                    if (-1 !== t) this.detach(t);
                                    else {
                                        const t = n[3],
                                            r = new Es(t, t[6], t[3]);
                                        r.detach(r.indexOf(e))
                                    }
                                }
                                const s = this._adjustIndex(t);
                                return function(e, t, n, r) {
                                    const s = 9 + r,
                                        i = n.length;
                                    r > 0 && (n[s - 1][4] = t), r < i - 9 ? (t[4] = n[s], Je(n, 9 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                                    const o = t[17];
                                    null !== o && n !== o && function(e, t) {
                                        const n = e[5],
                                            r = t[3][3][16];
                                        16 != (16 & r[2]) && t[16] !== r && (e[2] |= 1), null === n ? e[5] = [t] : n.push(t)
                                    }(o, t);
                                    const a = t[5];
                                    null !== a && a.insertView(e), t[2] |= 128
                                }(r, n, this._lContainer, s), ns(r, n, !0, fs(s, this._lContainer)), e.attachToViewContainerRef(this), Je(this._lContainer[8], s, e), e
                            }
                            move(e, t) {
                                if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                                return this.insert(e, t)
                            }
                            indexOf(e) {
                                const t = this._lContainer[8];
                                return null !== t ? t.indexOf(e) : -1
                            }
                            remove(e) {
                                this.allocateContainerIfNeeded();
                                const t = this._adjustIndex(e, -1);
                                (function(e, t) {
                                    const n = ss(e, t);
                                    n && is(n[1], n)
                                })(this._lContainer, t), Qe(this._lContainer[8], t)
                            }
                            detach(e) {
                                this.allocateContainerIfNeeded();
                                const t = this._adjustIndex(e, -1),
                                    n = ss(this._lContainer, t);
                                return n && null != Qe(this._lContainer[8], t) ? new ws(n) : null
                            }
                            _adjustIndex(e, t = 0) {
                                return null == e ? this.length + t : e
                            }
                            allocateContainerIfNeeded() {
                                null === this._lContainer[8] && (this._lContainer[8] = [])
                            }
                        });
                        const i = r[n.index];
                        if (mt(i)) s = i,
                            function(e, t) {
                                e[2] = -2
                            }(s);
                        else {
                            let e;
                            if (4 === n.type) e = Tt(i);
                            else if (e = r[11].createComment(""), bt(r)) {
                                const t = r[11],
                                    s = St(n, r);
                                ls(t, hs(t, s), e, function(e, t) {
                                    return Et(e) ? e.nextSibling(t) : t.nextSibling
                                }(t, s))
                            } else ds(r[1], r, e, n);
                            r[n.index] = s = Hr(i, r, e, n), Br(r, s)
                        }
                        return new Es(s, n, r)
                    }(e, t, Mt(), jt())
                },
                Ui = {};
            class Bi extends mi {
                constructor(e) {
                    super(), this.ngModule = e
                }
                resolveComponentFactory(e) {
                    const t = dt(e);
                    return new Wi(t, this.ngModule)
                }
            }

            function Zi(e) {
                const t = [];
                for (let n in e) e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
                return t
            }
            const Ki = new Le("SCHEDULER_TOKEN", {
                providedIn: "root",
                factory: () => bn
            });
            class Wi extends pi {
                constructor(e, t) {
                    super(), this.componentDef = e, this.ngModule = t, this.componentType = e.type, this.selector = e.selectors.map(ur).join(","), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!t
                }
                get inputs() {
                    return Zi(this.componentDef.inputs)
                }
                get outputs() {
                    return Zi(this.componentDef.outputs)
                }
                create(e, t, n, r) {
                    const s = (r = r || this.ngModule) ? function(e, t) {
                            return {
                                get: (n, r, s) => {
                                    const i = e.get(n, Ui, s);
                                    return i !== Ui || r === Ui ? i : t.get(n, r, s)
                                }
                            }
                        }(e, r.injector) : e,
                        i = s.get(wi, xt),
                        o = s.get(bi, null),
                        a = i.createRenderer(null, this.componentDef),
                        l = this.componentDef.selectors[0][0] || "div",
                        u = n ? function(e, t, n) {
                            if (Et(e)) return e.selectRootElement(t, n === et.ShadowDom);
                            let r = "string" == typeof t ? e.querySelector(t) : t;
                            return r.textContent = "", r
                        }(a, n, this.componentDef.encapsulation) : gr(l, i.createRenderer(null, this.componentDef), function(e) {
                            const t = e.toLowerCase();
                            return "svg" === t ? "http://www.w3.org/2000/svg" : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                        }(l)),
                        c = this.componentDef.onPush ? 576 : 528,
                        h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
                        d = {
                            components: [],
                            scheduler: bn,
                            clean: Gr,
                            playerHandler: null,
                            flags: 0
                        },
                        f = Tr(0, -1, null, 1, 0, null, null, null, null, null),
                        p = mr(null, f, d, c, null, null, i, a, o, s);
                    let g, m;
                    Gt(p, null);
                    try {
                        const e = function(e, t, n, r, s, i) {
                            const o = n[1];
                            n[19] = e;
                            const a = yr(o, null, 0, 3, null, null),
                                l = a.mergedAttrs = t.hostAttrs;
                            null !== l && (Us(a, l), null !== e && (hn(s, e, l), null !== a.classes && vs(s, e, a.classes), null !== a.styles && ys(s, e, a.styles)));
                            const u = r.createRenderer(e, t),
                                c = mr(n, xr(t), null, t.onPush ? 64 : 16, n[19], a, r, u, void 0);
                            return o.firstCreatePass && (An(Sn(a, n), o, t.type), Or(o, a), Lr(a, n.length, 1)), Br(n, c), n[19] = c
                        }(u, this.componentDef, p, i, a);
                        if (u)
                            if (n) hn(a, u, ["ng-version", Ei.full]);
                            else {
                                const {
                                    attrs: e,
                                    classes: t
                                } = function(e) {
                                    const t = [],
                                        n = [];
                                    let r = 1,
                                        s = 2;
                                    for (; r < e.length;) {
                                        let i = e[r];
                                        if ("string" == typeof i) 2 === s ? "" !== i && t.push(i, e[++r]) : 8 === s && n.push(i);
                                        else {
                                            if (!ir(s)) break;
                                            s = i
                                        }
                                        r++
                                    }
                                    return {
                                        attrs: t,
                                        classes: n
                                    }
                                }(this.componentDef.selectors[0]);
                                e && hn(a, u, e), t && t.length > 0 && vs(a, u, t.join(" "))
                            } m = kt(p[1], 0), t && (m.projection = t.map(e => Array.from(e))), g = function(e, t, n, r, s) {
                            const i = n[1],
                                o = function(e, t, n) {
                                    const r = Mt();
                                    e.firstCreatePass && (n.providersResolver && n.providersResolver(n), Rr(e, r, 1), jr(e, t, n));
                                    const s = Pn(t, e, t.length - 1, r);
                                    Jn(s, t);
                                    const i = St(r, t);
                                    return i && Jn(i, t), s
                                }(i, n, t);
                            r.components.push(o), e[8] = o, s && s.forEach(e => e(o, t)), t.contentQueries && t.contentQueries(1, o, n.length - 1);
                            const a = Mt();
                            if (i.firstCreatePass && (null !== t.hostBindings || null !== t.hostAttrs)) {
                                nn(a.index - 19);
                                const e = n[1];
                                Nr(e, t), Ar(e, n, t.hostVars), Dr(t, o)
                            }
                            return o
                        }(e, this.componentDef, p, d, [di]), vr(f, p, null)
                    } finally {
                        en()
                    }
                    const y = new qi(this.componentType, g, xs(yi, m, p), p, m);
                    return n && !h || (y.hostView._tViewNode.child = m), y
                }
            }
            class qi extends class {} {
                constructor(e, t, n, r, s) {
                    super(), this.location = n, this._rootLView = r, this._tNode = s, this.destroyCbs = [], this.instance = t, this.hostView = this.changeDetectorRef = new _s(r), this.hostView._tViewNode = function(e, t, n, r) {
                        let s = e.node;
                        return null == s && (e.node = s = Sr(0, null, 2, -1, null, null)), r[6] = s
                    }(r[1], 0, 0, r), this.componentType = e
                }
                get injector() {
                    return new Fn(this._tNode, this._rootLView)
                }
                destroy() {
                    this.destroyCbs && (this.destroyCbs.forEach(e => e()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
                }
                onDestroy(e) {
                    this.destroyCbs && this.destroyCbs.push(e)
                }
            }
            const Gi = void 0;
            var Yi = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], Gi
                ],
                [
                    ["AM", "PM"], Gi, Gi
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], Gi, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], Gi, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", Gi, "{1} 'at' {0}", Gi],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                function(e) {
                    let t = Math.floor(Math.abs(e)),
                        n = e.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === t && 0 === n ? 1 : 5
                }
            ];
            let Ji = {};

            function Qi(e) {
                const t = function(e) {
                    return e.toLowerCase().replace(/_/g, "-")
                }(e);
                let n = Xi(t);
                if (n) return n;
                const r = t.split("-")[0];
                if (n = Xi(r), n) return n;
                if ("en" === r) return Yi;
                throw new Error(`Missing locale data for the locale "${e}".`)
            }

            function Xi(e) {
                return e in Ji || (Ji[e] = ke.ng && ke.ng.common && ke.ng.common.locales && ke.ng.common.locales[e]), Ji[e]
            }
            const eo = function() {
                var e = {
                    LocaleId: 0,
                    DayPeriodsFormat: 1,
                    DayPeriodsStandalone: 2,
                    DaysFormat: 3,
                    DaysStandalone: 4,
                    MonthsFormat: 5,
                    MonthsStandalone: 6,
                    Eras: 7,
                    FirstDayOfWeek: 8,
                    WeekendRange: 9,
                    DateFormat: 10,
                    TimeFormat: 11,
                    DateTimeFormat: 12,
                    NumberSymbols: 13,
                    NumberFormats: 14,
                    CurrencyCode: 15,
                    CurrencySymbol: 16,
                    CurrencyName: 17,
                    Currencies: 18,
                    Directionality: 19,
                    PluralCase: 20,
                    ExtraData: 21
                };
                return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencyCode] = "CurrencyCode", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.Directionality] = "Directionality", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e
            }();
            let to = "en-US";

            function no(e) {
                var t, n;
                n = "Expected localeId to be defined", null == (t = e) && function(e, t, n, r) {
                    throw new Error(`ASSERTION ERROR: ${e}` + ` [Expected=> null != ${t} <=Actual]`)
                }(n, t), "string" == typeof e && (to = e.toLowerCase().replace(/_/g, "-"))
            }
            const ro = new Map;
            class so extends Ge {
                constructor(e, t) {
                    super(), this._parent = t, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Bi(this);
                    const n = pt(e),
                        r = e[Re] || null;
                    r && no(r), this._bootstrapComponents = Cn(n.bootstrap), this._r3Injector = Rs(e, t, [{
                        provide: Ge,
                        useValue: this
                    }, {
                        provide: mi,
                        useValue: this.componentFactoryResolver
                    }], ye(e)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(e)
                }
                get(e, t = Vs.THROW_IF_NOT_FOUND, n = ie.Default) {
                    return e === Vs || e === Ge || e === je ? this : this._r3Injector.get(e, t, n)
                }
                destroy() {
                    const e = this._r3Injector;
                    !e.destroyed && e.destroy(), this.destroyCbs.forEach(e => e()), this.destroyCbs = null
                }
                onDestroy(e) {
                    this.destroyCbs.push(e)
                }
            }
            class io extends class {} {
                constructor(e) {
                    super(), this.moduleType = e, null !== pt(e) && function e(t) {
                        if (null !== t.\u0275mod.id) {
                            const e = t.\u0275mod.id;
                            (function(e, t, n) {
                                if (t && t !== n) throw new Error(`Duplicate module registered for ${e} - ${ye(t)} vs ${ye(t.name)}`)
                            })(e, ro.get(e), t), ro.set(e, t)
                        }
                        let n = t.\u0275mod.imports;
                        n instanceof Function && (n = n()), n && n.forEach(t => e(t))
                    }(e)
                }
                create(e) {
                    return new so(this.moduleType, e)
                }
            }

            function oo(e, t) {
                const n = e[t];
                return n === cr ? void 0 : n
            }

            function ao(e, t, n, r, s, i) {
                const o = t + n;
                return Js(e, o, s) ? Ys(e, o + 1, i ? r.call(i, s) : r(s)) : oo(e, o + 1)
            }

            function lo(e, t) {
                const n = Ft();
                let r;
                const s = e + 19;
                n.firstCreatePass ? (r = function(e, t) {
                    if (t)
                        for (let n = t.length - 1; n >= 0; n--) {
                            const r = t[n];
                            if (e === r.name) return r
                        }
                    throw new Error(`The pipe '${e}' could not be found!`)
                }(t, n.pipeRegistry), n.data[s] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s];
                const i = r.factory || (r.factory = ft(r.type)),
                    o = Ue(Xs),
                    a = xn(!1),
                    l = i();
                return xn(a), Ue(o),
                    function(e, t, n, r) {
                        const s = n + 19;
                        s >= e.data.length && (e.data[s] = null, e.blueprint[s] = null), t[s] = r
                    }(n, jt(), e, l), l
            }

            function uo(e, t, n) {
                const r = jt(),
                    s = It(r, e);
                return ho(r, co(r, e) ? ao(r, Ut(), t, s.transform, n, s) : s.transform(n))
            }

            function co(e, t) {
                return e[1].data[t + 19].pure
            }

            function ho(e, t) {
                return Ws.isWrapped(t) && (t = Ws.unwrap(t), e[Pt.lFrame.bindingIndex] = cr), t
            }
            class fo extends E {
                constructor(e = !1) {
                    super(), this.__isAsync = e
                }
                emit(e) {
                    super.next(e)
                }
                subscribe(e, t, n) {
                    let r, s = e => null,
                        i = () => null;
                    e && "object" == typeof e ? (r = this.__isAsync ? t => {
                        setTimeout(() => e.next(t))
                    } : t => {
                        e.next(t)
                    }, e.error && (s = this.__isAsync ? t => {
                        setTimeout(() => e.error(t))
                    } : t => {
                        e.error(t)
                    }), e.complete && (i = this.__isAsync ? () => {
                        setTimeout(() => e.complete())
                    } : () => {
                        e.complete()
                    })) : (r = this.__isAsync ? t => {
                        setTimeout(() => e(t))
                    } : t => {
                        e(t)
                    }, t && (s = this.__isAsync ? e => {
                        setTimeout(() => t(e))
                    } : e => {
                        t(e)
                    }), n && (i = this.__isAsync ? () => {
                        setTimeout(() => n())
                    } : () => {
                        n()
                    }));
                    const o = super.subscribe(r, s, i);
                    return e instanceof h && e.add(o), o
                }
            }

            function po(e, t) {
                return Ts(Vi, yi, e, t)
            }
            const go = new Le("Application Initializer");
            let mo = (() => {
                class e {
                    constructor(e) {
                        this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const e = [],
                            t = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let n = 0; n < this.appInits.length; n++) {
                                const t = this.appInits[n]();
                                ii(t) && e.push(t)
                            }
                        Promise.all(e).then(() => {
                            t()
                        }).catch(e => {
                            this.reject(e)
                        }), 0 === e.length && t(), this.initialized = !0
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(go, 8))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const yo = new Le("AppId"),
                vo = {
                    provide: yo,
                    useFactory: function() {
                        return `${wo()}${wo()}${wo()}`
                    },
                    deps: []
                };

            function wo() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            const _o = new Le("Platform Initializer"),
                bo = new Le("Platform ID"),
                Co = new Le("appBootstrapListener");
            let Eo = (() => {
                class e {
                    log(e) {
                        console.log(e)
                    }
                    warn(e) {
                        console.warn(e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const xo = new Le("LocaleId"),
                To = new Le("DefaultCurrencyCode");
            class So {
                constructor(e, t) {
                    this.ngModuleFactory = e, this.componentFactories = t
                }
            }
            const ko = function(e) {
                    return new io(e)
                },
                Io = ko,
                No = function(e) {
                    return Promise.resolve(ko(e))
                },
                Ao = function(e) {
                    const t = ko(e),
                        n = Cn(pt(e).declarations).reduce((e, t) => {
                            const n = dt(t);
                            return n && e.push(new Wi(n)), e
                        }, []);
                    return new So(t, n)
                },
                Do = Ao,
                Ro = function(e) {
                    return Promise.resolve(Ao(e))
                };
            let Oo = (() => {
                class e {
                    constructor() {
                        this.compileModuleSync = Io, this.compileModuleAsync = No, this.compileModuleAndAllComponentsSync = Do, this.compileModuleAndAllComponentsAsync = Ro
                    }
                    clearCache() {}
                    clearCacheFor(e) {}
                    getModuleId(e) {}
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Po = new Le("compilerOptions"),
                Lo = (() => Promise.resolve(0))();

            function jo(e) {
                "undefined" == typeof Zone ? Lo.then(() => {
                    e && e.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
            }
            class Fo {
                constructor({
                    enableLongStackTrace: e = !1,
                    shouldCoalesceEventChangeDetection: t = !1
                }) {
                    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new fo(!1), this.onMicrotaskEmpty = new fo(!1), this.onStable = new fo(!1), this.onError = new fo(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = t, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function() {
                            let e = ke.requestAnimationFrame,
                                t = ke.cancelAnimationFrame;
                            if ("undefined" != typeof Zone && e && t) {
                                const n = e[Zone.__symbol__("OriginalDelegate")];
                                n && (e = n);
                                const r = t[Zone.__symbol__("OriginalDelegate")];
                                r && (t = r)
                            }
                            return {
                                nativeRequestAnimationFrame: e,
                                nativeCancelAnimationFrame: t
                            }
                        }().nativeRequestAnimationFrame,
                        function(e) {
                            const t = !!e.shouldCoalesceEventChangeDetection && e.nativeRequestAnimationFrame && (() => {
                                ! function(e) {
                                    -1 === e.lastRequestAnimationFrameId && (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ke, () => {
                                        e.lastRequestAnimationFrameId = -1, $o(e), Ho(e)
                                    }), $o(e))
                                }(e)
                            });
                            e._inner = e._inner.fork({
                                name: "angular",
                                properties: {
                                    isAngularZone: !0,
                                    maybeDelayChangeDetection: t
                                },
                                onInvokeTask: (n, r, s, i, o, a) => {
                                    try {
                                        return zo(e), n.invokeTask(s, i, o, a)
                                    } finally {
                                        t && "eventTask" === i.type && t(), Uo(e)
                                    }
                                },
                                onInvoke: (t, n, r, s, i, o, a) => {
                                    try {
                                        return zo(e), t.invoke(r, s, i, o, a)
                                    } finally {
                                        Uo(e)
                                    }
                                },
                                onHasTask: (t, n, r, s) => {
                                    t.hasTask(r, s), n === r && ("microTask" == s.change ? (e._hasPendingMicrotasks = s.microTask, $o(e), Ho(e)) : "macroTask" == s.change && (e.hasPendingMacrotasks = s.macroTask))
                                },
                                onHandleError: (t, n, r, s) => (t.handleError(r, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
                            })
                        }(this)
                }
                static isInAngularZone() {
                    return !0 === Zone.current.get("isAngularZone")
                }
                static assertInAngularZone() {
                    if (!Fo.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
                static assertNotInAngularZone() {
                    if (Fo.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
                run(e, t, n) {
                    return this._inner.run(e, t, n)
                }
                runTask(e, t, n, r) {
                    const s = this._inner,
                        i = s.scheduleEventTask("NgZoneEvent: " + r, e, Vo, Mo, Mo);
                    try {
                        return s.runTask(i, t, n)
                    } finally {
                        s.cancelTask(i)
                    }
                }
                runGuarded(e, t, n) {
                    return this._inner.runGuarded(e, t, n)
                }
                runOutsideAngular(e) {
                    return this._outer.run(e)
                }
            }

            function Mo() {}
            const Vo = {};

            function Ho(e) {
                if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                    e._nesting++, e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--, !e.hasPendingMicrotasks) try {
                        e.runOutsideAngular(() => e.onStable.emit(null))
                    } finally {
                        e.isStable = !0
                    }
                }
            }

            function $o(e) {
                e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || e.shouldCoalesceEventChangeDetection && -1 !== e.lastRequestAnimationFrameId)
            }

            function zo(e) {
                e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
            }

            function Uo(e) {
                e._nesting--, Ho(e)
            }
            class Bo {
                constructor() {
                    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new fo, this.onMicrotaskEmpty = new fo, this.onStable = new fo, this.onError = new fo
                }
                run(e, t, n) {
                    return e.apply(t, n)
                }
                runGuarded(e, t, n) {
                    return e.apply(t, n)
                }
                runOutsideAngular(e) {
                    return e()
                }
                runTask(e, t, n, r) {
                    return e.apply(t, n)
                }
            }
            let Zo = (() => {
                    class e {
                        constructor(e) {
                            this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), e.run(() => {
                                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                            })
                        }
                        _watchAngularEvents() {
                            this._ngZone.onUnstable.subscribe({
                                next: () => {
                                    this._didWork = !0, this._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.subscribe({
                                    next: () => {
                                        Fo.assertNotInAngularZone(), jo(() => {
                                            this._isZoneStable = !0, this._runCallbacksIfReady()
                                        })
                                    }
                                })
                            })
                        }
                        increasePendingRequestCount() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                        decreasePendingRequestCount() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                        isStable() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                        _runCallbacksIfReady() {
                            if (this.isStable()) jo(() => {
                                for (; 0 !== this._callbacks.length;) {
                                    let e = this._callbacks.pop();
                                    clearTimeout(e.timeoutId), e.doneCb(this._didWork)
                                }
                                this._didWork = !1
                            });
                            else {
                                let e = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter(t => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)), this._didWork = !0
                            }
                        }
                        getPendingTasks() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(e => ({
                                source: e.source,
                                creationLocation: e.creationLocation,
                                data: e.data
                            })) : []
                        }
                        addCallback(e, t, n) {
                            let r = -1;
                            t && t > 0 && (r = setTimeout(() => {
                                this._callbacks = this._callbacks.filter(e => e.timeoutId !== r), e(this._didWork, this.getPendingTasks())
                            }, t)), this._callbacks.push({
                                doneCb: e,
                                timeoutId: r,
                                updateCb: n
                            })
                        }
                        whenStable(e, t, n) {
                            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                            this.addCallback(e, t, n), this._runCallbacksIfReady()
                        }
                        getPendingRequestCount() {
                            return this._pendingCount
                        }
                        findProviders(e, t, n) {
                            return []
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(Fo))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                Ko = (() => {
                    class e {
                        constructor() {
                            this._applications = new Map, Go.addToWindow(this)
                        }
                        registerApplication(e, t) {
                            this._applications.set(e, t)
                        }
                        unregisterApplication(e) {
                            this._applications.delete(e)
                        }
                        unregisterAllApplications() {
                            this._applications.clear()
                        }
                        getTestability(e) {
                            return this._applications.get(e) || null
                        }
                        getAllTestabilities() {
                            return Array.from(this._applications.values())
                        }
                        getAllRootElements() {
                            return Array.from(this._applications.keys())
                        }
                        findTestabilityInTree(e, t = !0) {
                            return Go.findTestabilityInTree(this, e, t)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            class Wo {
                addToWindow(e) {}
                findTestabilityInTree(e, t, n) {
                    return null
                }
            }
            let qo, Go = new Wo,
                Yo = function(e, t, n) {
                    const r = e.get(Po, []).concat(t),
                        s = new io(n);
                    if (0 === Hs.size) return Promise.resolve(s);
                    const i = function(e) {
                        const t = [];
                        return e.forEach(e => e && t.push(...e)), t
                    }(r.map(e => e.providers));
                    if (0 === i.length) return Promise.resolve(s);
                    const o = function() {
                            const e = ke.ng;
                            if (!e || !e.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                            return e.\u0275compilerFacade
                        }(),
                        a = Vs.create({
                            providers: i
                        }).get(o.ResourceLoader);
                    return function(e) {
                        const t = [],
                            n = new Map;

                        function r(e) {
                            let t = n.get(e);
                            if (!t) {
                                const r = (e => Promise.resolve(a.get(e)))(e);
                                n.set(e, t = r.then(zs))
                            }
                            return t
                        }
                        return Hs.forEach((e, n) => {
                            const s = [];
                            e.templateUrl && s.push(r(e.templateUrl).then(t => {
                                e.template = t
                            }));
                            const i = e.styleUrls,
                                o = e.styles || (e.styles = []),
                                a = e.styles.length;
                            i && i.forEach((t, n) => {
                                o.push(""), s.push(r(t).then(r => {
                                    o[a + n] = r, i.splice(i.indexOf(t), 1), 0 == i.length && (e.styleUrls = void 0)
                                }))
                            });
                            const l = Promise.all(s).then(() => function(e) {
                                $s.delete(e)
                            }(n));
                            t.push(l)
                        }), Hs = new Map, Promise.all(t).then(() => {})
                    }().then(() => s)
                };
            const Jo = new Le("AllowMultipleToken");

            function Qo(e, t, n = []) {
                const r = `Platform: ${t}`,
                    s = new Le(r);
                return (t = []) => {
                    let i = Xo();
                    if (!i || i.injector.get(Jo, !1))
                        if (e) e(n.concat(t).concat({
                            provide: s,
                            useValue: !0
                        }));
                        else {
                            const e = n.concat(t).concat({
                                provide: s,
                                useValue: !0
                            }, {
                                provide: Ss,
                                useValue: "platform"
                            });
                            ! function(e) {
                                if (qo && !qo.destroyed && !qo.injector.get(Jo, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                qo = e.get(ea);
                                const t = e.get(_o, null);
                                t && t.forEach(e => e())
                            }(Vs.create({
                                providers: e,
                                name: r
                            }))
                        } return function(e) {
                        const t = Xo();
                        if (!t) throw new Error("No platform exists!");
                        if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return t
                    }(s)
                }
            }

            function Xo() {
                return qo && !qo.destroyed ? qo : null
            }
            let ea = (() => {
                class e {
                    constructor(e) {
                        this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(e, t) {
                        const n = function(e, t) {
                                let n;
                                return n = "noop" === e ? new Bo : ("zone.js" === e ? void 0 : e) || new Fo({
                                    enableLongStackTrace: Kn(),
                                    shouldCoalesceEventChangeDetection: t
                                }), n
                            }(t ? t.ngZone : void 0, t && t.ngZoneEventCoalescing || !1),
                            r = [{
                                provide: Fo,
                                useValue: n
                            }];
                        return n.run(() => {
                            const t = Vs.create({
                                    providers: r,
                                    parent: this.injector,
                                    name: e.moduleType.name
                                }),
                                s = e.create(t),
                                i = s.injector.get(zn, null);
                            if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return s.onDestroy(() => ra(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({
                                    next: e => {
                                        i.handleError(e)
                                    }
                                })),
                                function(e, t, n) {
                                    try {
                                        const r = n();
                                        return ii(r) ? r.catch(n => {
                                            throw t.runOutsideAngular(() => e.handleError(n)), n
                                        }) : r
                                    } catch (r) {
                                        throw t.runOutsideAngular(() => e.handleError(r)), r
                                    }
                                }(i, n, () => {
                                    const e = s.injector.get(mo);
                                    return e.runInitializers(), e.donePromise.then(() => (no(s.injector.get(xo, "en-US") || "en-US"), this._moduleDoBootstrap(s), s))
                                })
                        })
                    }
                    bootstrapModule(e, t = []) {
                        const n = ta({}, t);
                        return Yo(this.injector, n, e).then(e => this.bootstrapModuleFactory(e, n))
                    }
                    _moduleDoBootstrap(e) {
                        const t = e.injector.get(na);
                        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(e => t.bootstrap(e));
                        else {
                            if (!e.instance.ngDoBootstrap) throw new Error(`The module ${ye(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
                            e.instance.ngDoBootstrap(t)
                        }
                        this._modules.push(e)
                    }
                    onDestroy(e) {
                        this._destroyListeners.push(e)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(e => e.destroy()), this._destroyListeners.forEach(e => e()), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(Vs))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function ta(e, t) {
                return Array.isArray(t) ? t.reduce(ta, e) : Object.assign(Object.assign({}, e), t)
            }
            let na = (() => {
                class e {
                    constructor(e, t, n, r, s, i) {
                        this._zone = e, this._console = t, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = s, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Kn(), this._zone.onMicrotaskEmpty.subscribe({
                            next: () => {
                                this._zone.run(() => {
                                    this.tick()
                                })
                            }
                        });
                        const o = new v(e => {
                                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                    e.next(this._stable), e.complete()
                                })
                            }),
                            a = new v(e => {
                                let t;
                                this._zone.runOutsideAngular(() => {
                                    t = this._zone.onStable.subscribe(() => {
                                        Fo.assertNotInAngularZone(), jo(() => {
                                            this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, e.next(!0))
                                        })
                                    })
                                });
                                const n = this._zone.onUnstable.subscribe(() => {
                                    Fo.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                        e.next(!1)
                                    }))
                                });
                                return () => {
                                    t.unsubscribe(), n.unsubscribe()
                                }
                            });
                        this.isStable = Z(o, a.pipe(e => {
                            return K()((t = Q, function(e) {
                                let n;
                                n = "function" == typeof t ? t : function() {
                                    return t
                                };
                                const r = Object.create(e, Y);
                                return r.source = e, r.subjectFactory = n, r
                            })(e));
                            var t
                        }))
                    }
                    bootstrap(e, t) {
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        let n;
                        n = e instanceof pi ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                        const r = n.isBoundToModule ? void 0 : this._injector.get(Ge),
                            s = n.create(Vs.NULL, [], t || n.selector, r);
                        s.onDestroy(() => {
                            this._unloadComponent(s)
                        });
                        const i = s.injector.get(Zo, null);
                        return i && s.injector.get(Ko).registerApplication(s.location.nativeElement, i), this._loadComponent(s), Kn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), s
                    }
                    tick() {
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        try {
                            this._runningTick = !0;
                            for (let e of this._views) e.detectChanges();
                            if (this._enforceNoNewChanges)
                                for (let e of this._views) e.checkNoChanges()
                        } catch (e) {
                            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(e))
                        } finally {
                            this._runningTick = !1
                        }
                    }
                    attachView(e) {
                        const t = e;
                        this._views.push(t), t.attachToAppRef(this)
                    }
                    detachView(e) {
                        const t = e;
                        ra(this._views, t), t.detachFromAppRef()
                    }
                    _loadComponent(e) {
                        this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(Co, []).concat(this._bootstrapListeners).forEach(t => t(e))
                    }
                    _unloadComponent(e) {
                        this.detachView(e.hostView), ra(this.components, e)
                    }
                    ngOnDestroy() {
                        this._views.slice().forEach(e => e.destroy())
                    }
                    get viewCount() {
                        return this._views.length
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(Fo), Ze(Eo), Ze(Vs), Ze(zn), Ze(mi), Ze(mo))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function ra(e, t) {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            const sa = Qo(null, "core", [{
                    provide: bo,
                    useValue: "unknown"
                }, {
                    provide: ea,
                    deps: [Vs]
                }, {
                    provide: Ko,
                    deps: []
                }, {
                    provide: Eo,
                    deps: []
                }]),
                ia = [{
                    provide: na,
                    useClass: na,
                    deps: [Fo, Eo, Vs, zn, mi, mo]
                }, {
                    provide: Ki,
                    deps: [Fo],
                    useFactory: function(e) {
                        let t = [];
                        return e.onStable.subscribe(() => {
                                for (; t.length;) t.pop()()
                            }),
                            function(e) {
                                t.push(e)
                            }
                    }
                }, {
                    provide: mo,
                    useClass: mo,
                    deps: [
                        [new ne, go]
                    ]
                }, {
                    provide: Oo,
                    useClass: Oo,
                    deps: []
                }, vo, {
                    provide: Pi,
                    useFactory: function() {
                        return Fi
                    },
                    deps: []
                }, {
                    provide: Li,
                    useFactory: function() {
                        return Mi
                    },
                    deps: []
                }, {
                    provide: xo,
                    useFactory: function(e) {
                        return no(e = e || "undefined" != typeof $localize && $localize.locale || "en-US"), e
                    },
                    deps: [
                        [new te(xo), new ne, new se]
                    ]
                }, {
                    provide: To,
                    useValue: "USD"
                }];
            let oa = (() => {
                class e {
                    constructor(e) {}
                }
                return e.\u0275mod = lt({
                    type: e
                }), e.\u0275inj = le({
                    factory: function(t) {
                        return new(t || e)(Ze(na))
                    },
                    providers: ia
                }), e
            })();
            const aa = {
                production: !0,
                domainUrl: "",
                assetsPath: "/entando-de-app/widgets/seeds-card-ng/assets"
            };

            function la(...e) {
                let t = e[e.length - 1];
                return T(t) ? (e.pop(), M(e, t)) : B(e)
            }

            function ua(e, t) {
                return H(e, t, 1)
            }
            class ca {
                constructor(e, t) {
                    this.predicate = e, this.thisArg = t
                }
                call(e, t) {
                    return t.subscribe(new ha(e, this.predicate, this.thisArg))
                }
            }
            class ha extends p {
                constructor(e, t, n) {
                    super(e), this.predicate = t, this.thisArg = n, this.count = 0
                }
                _next(e) {
                    let t;
                    try {
                        t = this.predicate.call(this.thisArg, e, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    t && this.destination.next(e)
                }
            }
            let da = null;

            function fa() {
                return da
            }
            const pa = new Le("DocumentToken"),
                ga = {
                    ADP: [void 0, void 0, 0],
                    AFN: [void 0, void 0, 0],
                    ALL: [void 0, void 0, 0],
                    AMD: [void 0, void 0, 2],
                    AOA: [void 0, "Kz"],
                    ARS: [void 0, "$"],
                    AUD: ["A$", "$"],
                    BAM: [void 0, "KM"],
                    BBD: [void 0, "$"],
                    BDT: [void 0, "\u09f3"],
                    BHD: [void 0, void 0, 3],
                    BIF: [void 0, void 0, 0],
                    BMD: [void 0, "$"],
                    BND: [void 0, "$"],
                    BOB: [void 0, "Bs"],
                    BRL: ["R$"],
                    BSD: [void 0, "$"],
                    BWP: [void 0, "P"],
                    BYN: [void 0, "\u0440.", 2],
                    BYR: [void 0, void 0, 0],
                    BZD: [void 0, "$"],
                    CAD: ["CA$", "$", 2],
                    CHF: [void 0, void 0, 2],
                    CLF: [void 0, void 0, 4],
                    CLP: [void 0, "$", 0],
                    CNY: ["CN\xa5", "\xa5"],
                    COP: [void 0, "$", 2],
                    CRC: [void 0, "\u20a1", 2],
                    CUC: [void 0, "$"],
                    CUP: [void 0, "$"],
                    CZK: [void 0, "K\u010d", 2],
                    DJF: [void 0, void 0, 0],
                    DKK: [void 0, "kr", 2],
                    DOP: [void 0, "$"],
                    EGP: [void 0, "E\xa3"],
                    ESP: [void 0, "\u20a7", 0],
                    EUR: ["\u20ac"],
                    FJD: [void 0, "$"],
                    FKP: [void 0, "\xa3"],
                    GBP: ["\xa3"],
                    GEL: [void 0, "\u20be"],
                    GIP: [void 0, "\xa3"],
                    GNF: [void 0, "FG", 0],
                    GTQ: [void 0, "Q"],
                    GYD: [void 0, "$", 2],
                    HKD: ["HK$", "$"],
                    HNL: [void 0, "L"],
                    HRK: [void 0, "kn"],
                    HUF: [void 0, "Ft", 2],
                    IDR: [void 0, "Rp", 2],
                    ILS: ["\u20aa"],
                    INR: ["\u20b9"],
                    IQD: [void 0, void 0, 0],
                    IRR: [void 0, void 0, 0],
                    ISK: [void 0, "kr", 0],
                    ITL: [void 0, void 0, 0],
                    JMD: [void 0, "$"],
                    JOD: [void 0, void 0, 3],
                    JPY: ["\xa5", void 0, 0],
                    KHR: [void 0, "\u17db"],
                    KMF: [void 0, "CF", 0],
                    KPW: [void 0, "\u20a9", 0],
                    KRW: ["\u20a9", void 0, 0],
                    KWD: [void 0, void 0, 3],
                    KYD: [void 0, "$"],
                    KZT: [void 0, "\u20b8"],
                    LAK: [void 0, "\u20ad", 0],
                    LBP: [void 0, "L\xa3", 0],
                    LKR: [void 0, "Rs"],
                    LRD: [void 0, "$"],
                    LTL: [void 0, "Lt"],
                    LUF: [void 0, void 0, 0],
                    LVL: [void 0, "Ls"],
                    LYD: [void 0, void 0, 3],
                    MGA: [void 0, "Ar", 0],
                    MGF: [void 0, void 0, 0],
                    MMK: [void 0, "K", 0],
                    MNT: [void 0, "\u20ae", 2],
                    MRO: [void 0, void 0, 0],
                    MUR: [void 0, "Rs", 2],
                    MXN: ["MX$", "$"],
                    MYR: [void 0, "RM"],
                    NAD: [void 0, "$"],
                    NGN: [void 0, "\u20a6"],
                    NIO: [void 0, "C$"],
                    NOK: [void 0, "kr", 2],
                    NPR: [void 0, "Rs"],
                    NZD: ["NZ$", "$"],
                    OMR: [void 0, void 0, 3],
                    PHP: [void 0, "\u20b1"],
                    PKR: [void 0, "Rs", 2],
                    PLN: [void 0, "z\u0142"],
                    PYG: [void 0, "\u20b2", 0],
                    RON: [void 0, "lei"],
                    RSD: [void 0, void 0, 0],
                    RUB: [void 0, "\u20bd"],
                    RUR: [void 0, "\u0440."],
                    RWF: [void 0, "RF", 0],
                    SBD: [void 0, "$"],
                    SEK: [void 0, "kr", 2],
                    SGD: [void 0, "$"],
                    SHP: [void 0, "\xa3"],
                    SLL: [void 0, void 0, 0],
                    SOS: [void 0, void 0, 0],
                    SRD: [void 0, "$"],
                    SSP: [void 0, "\xa3"],
                    STD: [void 0, void 0, 0],
                    STN: [void 0, "Db"],
                    SYP: [void 0, "\xa3", 0],
                    THB: [void 0, "\u0e3f"],
                    TMM: [void 0, void 0, 0],
                    TND: [void 0, void 0, 3],
                    TOP: [void 0, "T$"],
                    TRL: [void 0, void 0, 0],
                    TRY: [void 0, "\u20ba"],
                    TTD: [void 0, "$"],
                    TWD: ["NT$", "$", 2],
                    TZS: [void 0, void 0, 2],
                    UAH: [void 0, "\u20b4"],
                    UGX: [void 0, void 0, 0],
                    USD: ["$"],
                    UYI: [void 0, void 0, 0],
                    UYU: [void 0, "$"],
                    UYW: [void 0, void 0, 4],
                    UZS: [void 0, void 0, 2],
                    VEF: [void 0, "Bs", 2],
                    VND: ["\u20ab", void 0, 0],
                    VUV: [void 0, void 0, 0],
                    XAF: ["FCFA", void 0, 0],
                    XCD: ["EC$", "$"],
                    XOF: ["CFA", void 0, 0],
                    XPF: ["CFPF", void 0, 0],
                    XXX: ["\xa4"],
                    YER: [void 0, void 0, 0],
                    ZAR: [void 0, "R"],
                    ZMK: [void 0, void 0, 0],
                    ZMW: [void 0, "ZK"],
                    ZWD: [void 0, void 0, 0]
                },
                ma = function() {
                    var e = {
                        Decimal: 0,
                        Percent: 1,
                        Currency: 2,
                        Scientific: 3
                    };
                    return e[e.Decimal] = "Decimal", e[e.Percent] = "Percent", e[e.Currency] = "Currency", e[e.Scientific] = "Scientific", e
                }(),
                ya = function() {
                    var e = {
                        Zero: 0,
                        One: 1,
                        Two: 2,
                        Few: 3,
                        Many: 4,
                        Other: 5
                    };
                    return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e
                }(),
                va = function() {
                    var e = {
                        Decimal: 0,
                        Group: 1,
                        List: 2,
                        PercentSign: 3,
                        PlusSign: 4,
                        MinusSign: 5,
                        Exponential: 6,
                        SuperscriptingExponent: 7,
                        PerMille: 8,
                        Infinity: 9,
                        NaN: 10,
                        TimeSeparator: 11,
                        CurrencyDecimal: 12,
                        CurrencyGroup: 13
                    };
                    return e[e.Decimal] = "Decimal", e[e.Group] = "Group", e[e.List] = "List", e[e.PercentSign] = "PercentSign", e[e.PlusSign] = "PlusSign", e[e.MinusSign] = "MinusSign", e[e.Exponential] = "Exponential", e[e.SuperscriptingExponent] = "SuperscriptingExponent", e[e.PerMille] = "PerMille", e[e.Infinity] = "Infinity", e[e.NaN] = "NaN", e[e.TimeSeparator] = "TimeSeparator", e[e.CurrencyDecimal] = "CurrencyDecimal", e[e.CurrencyGroup] = "CurrencyGroup", e
                }();

            function wa(e, t) {
                const n = Qi(e),
                    r = n[eo.NumberSymbols][t];
                if (void 0 === r) {
                    if (t === va.CurrencyDecimal) return n[eo.NumberSymbols][va.Decimal];
                    if (t === va.CurrencyGroup) return n[eo.NumberSymbols][va.Group]
                }
                return r
            }
            const _a = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

            function ba(e) {
                const t = parseInt(e);
                if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + e);
                return t
            }
            class Ca {}
            let Ea = (() => {
                class e extends Ca {
                    constructor(e) {
                        super(), this.locale = e
                    }
                    getPluralCategory(e, t) {
                        switch (function(e) {
                            return Qi(e)[eo.PluralCase]
                        }(t || this.locale)(e)) {
                            case ya.Zero:
                                return "zero";
                            case ya.One:
                                return "one";
                            case ya.Two:
                                return "two";
                            case ya.Few:
                                return "few";
                            case ya.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(xo))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function xa(e, t) {
                t = encodeURIComponent(t);
                for (const n of e.split(";")) {
                    const e = n.indexOf("="),
                        [r, s] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
                    if (r.trim() === t) return decodeURIComponent(s)
                }
                return null
            }
            let Ta = (() => {
                class e {
                    constructor(e, t) {
                        this._viewContainer = e, this._context = new Sa, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = t
                    }
                    set ngIf(e) {
                        this._context.$implicit = this._context.ngIf = e, this._updateView()
                    }
                    set ngIfThen(e) {
                        ka("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView()
                    }
                    set ngIfElse(e) {
                        ka("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView()
                    }
                    _updateView() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }
                    static ngTemplateContextGuard(e, t) {
                        return !0
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Xs($i), Xs(Vi))
                }, e.\u0275dir = ct({
                    type: e,
                    selectors: [
                        ["", "ngIf", ""]
                    ],
                    inputs: {
                        ngIf: "ngIf",
                        ngIfThen: "ngIfThen",
                        ngIfElse: "ngIfElse"
                    }
                }), e
            })();
            class Sa {
                constructor() {
                    this.$implicit = null, this.ngIf = null
                }
            }

            function ka(e, t) {
                if (t && !t.createEmbeddedView) throw new Error(`${e} must be a TemplateRef, but received '${ye(t)}'.`)
            }
            let Ia = (() => {
                    class e {
                        constructor(e, t = "USD") {
                            this._locale = e, this._defaultCurrencyCode = t
                        }
                        transform(t, n, r = "symbol", s, i) {
                            if (function(e) {
                                    return null == e || "" === e || e != e
                                }(t)) return null;
                            i = i || this._locale, "boolean" == typeof r && (console && console.warn && console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'), r = r ? "symbol" : "code");
                            let o = n || this._defaultCurrencyCode;
                            "code" !== r && (o = "symbol" === r || "symbol-narrow" === r ? function(e, t, n = "en") {
                                const r = function(e) {
                                        return Qi(e)[eo.Currencies]
                                    }(n)[e] || ga[e] || [],
                                    s = r[1];
                                return "narrow" === t && "string" == typeof s ? s : r[0] || e
                            }(o, "symbol" === r ? "wide" : "narrow", i) : r);
                            try {
                                return function(e, t, n, r, s) {
                                    const i = function(e, t = "-") {
                                        const n = {
                                                minInt: 1,
                                                minFrac: 0,
                                                maxFrac: 0,
                                                posPre: "",
                                                posSuf: "",
                                                negPre: "",
                                                negSuf: "",
                                                gSize: 0,
                                                lgSize: 0
                                            },
                                            r = e.split(";"),
                                            s = r[0],
                                            i = r[1],
                                            o = -1 !== s.indexOf(".") ? s.split(".") : [s.substring(0, s.lastIndexOf("0") + 1), s.substring(s.lastIndexOf("0") + 1)],
                                            a = o[0],
                                            l = o[1] || "";
                                        n.posPre = a.substr(0, a.indexOf("#"));
                                        for (let c = 0; c < l.length; c++) {
                                            const e = l.charAt(c);
                                            "0" === e ? n.minFrac = n.maxFrac = c + 1 : "#" === e ? n.maxFrac = c + 1 : n.posSuf += e
                                        }
                                        const u = a.split(",");
                                        if (n.gSize = u[1] ? u[1].length : 0, n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0, i) {
                                            const e = s.length - n.posPre.length - n.posSuf.length,
                                                t = i.indexOf("#");
                                            n.negPre = i.substr(0, t).replace(/'/g, ""), n.negSuf = i.substr(t + e).replace(/'/g, "")
                                        } else n.negPre = t + n.posPre, n.negSuf = n.posSuf;
                                        return n
                                    }(function(e, t) {
                                        return Qi(e)[eo.NumberFormats][t]
                                    }(t, ma.Currency), wa(t, va.MinusSign));
                                    return i.minFrac = function(e) {
                                            let t;
                                            const n = ga[e];
                                            return n && (t = n[2]), "number" == typeof t ? t : 2
                                        }(r), i.maxFrac = i.minFrac,
                                        function(e, t, n, r, s, i, o = !1) {
                                            let a = "",
                                                l = !1;
                                            if (isFinite(e)) {
                                                let u = function(e) {
                                                    let t, n, r, s, i, o = Math.abs(e) + "",
                                                        a = 0;
                                                    for ((n = o.indexOf(".")) > -1 && (o = o.replace(".", "")), (r = o.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +o.slice(r + 1), o = o.substring(0, r)) : n < 0 && (n = o.length), r = 0;
                                                        "0" === o.charAt(r); r++);
                                                    if (r === (i = o.length)) t = [0], n = 1;
                                                    else {
                                                        for (i--;
                                                            "0" === o.charAt(i);) i--;
                                                        for (n -= r, t = [], s = 0; r <= i; r++, s++) t[s] = Number(o.charAt(r))
                                                    }
                                                    return n > 22 && (t = t.splice(0, 21), a = n - 1, n = 1), {
                                                        digits: t,
                                                        exponent: a,
                                                        integerLen: n
                                                    }
                                                }(e);
                                                o && (u = function(e) {
                                                    if (0 === e.digits[0]) return e;
                                                    const t = e.digits.length - e.integerLen;
                                                    return e.exponent ? e.exponent += 2 : (0 === t ? e.digits.push(0, 0) : 1 === t && e.digits.push(0), e.integerLen += 2), e
                                                }(u));
                                                let c = t.minInt,
                                                    h = t.minFrac,
                                                    d = t.maxFrac;
                                                if (i) {
                                                    const e = i.match(_a);
                                                    if (null === e) throw new Error(`${i} is not a valid digit info`);
                                                    const t = e[1],
                                                        n = e[3],
                                                        r = e[5];
                                                    null != t && (c = ba(t)), null != n && (h = ba(n)), null != r ? d = ba(r) : null != n && h > d && (d = h)
                                                }! function(e, t, n) {
                                                    if (t > n) throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);
                                                    let r = e.digits,
                                                        s = r.length - e.integerLen;
                                                    const i = Math.min(Math.max(t, s), n);
                                                    let o = i + e.integerLen,
                                                        a = r[o];
                                                    if (o > 0) {
                                                        r.splice(Math.max(e.integerLen, o));
                                                        for (let e = o; e < r.length; e++) r[e] = 0
                                                    } else {
                                                        s = Math.max(0, s), e.integerLen = 1, r.length = Math.max(1, o = i + 1), r[0] = 0;
                                                        for (let e = 1; e < o; e++) r[e] = 0
                                                    }
                                                    if (a >= 5)
                                                        if (o - 1 < 0) {
                                                            for (let t = 0; t > o; t--) r.unshift(0), e.integerLen++;
                                                            r.unshift(1), e.integerLen++
                                                        } else r[o - 1]++;
                                                    for (; s < Math.max(0, i); s++) r.push(0);
                                                    let l = 0 !== i;
                                                    const u = t + e.integerLen,
                                                        c = r.reduceRight((function(e, t, n, r) {
                                                            return r[n] = (t += e) < 10 ? t : t - 10, l && (0 === r[n] && n >= u ? r.pop() : l = !1), t >= 10 ? 1 : 0
                                                        }), 0);
                                                    c && (r.unshift(c), e.integerLen++)
                                                }(u, h, d);
                                                let f = u.digits,
                                                    p = u.integerLen;
                                                const g = u.exponent;
                                                let m = [];
                                                for (l = f.every(e => !e); p < c; p++) f.unshift(0);
                                                for (; p < 0; p++) f.unshift(0);
                                                p > 0 ? m = f.splice(p, f.length) : (m = f, f = [0]);
                                                const y = [];
                                                for (f.length >= t.lgSize && y.unshift(f.splice(-t.lgSize, f.length).join("")); f.length > t.gSize;) y.unshift(f.splice(-t.gSize, f.length).join(""));
                                                f.length && y.unshift(f.join("")), a = y.join(wa(n, r)), m.length && (a += wa(n, s) + m.join("")), g && (a += wa(n, va.Exponential) + "+" + g)
                                            } else a = wa(n, va.Infinity);
                                            return a = e < 0 && !l ? t.negPre + a + t.negSuf : t.posPre + a + t.posSuf, a
                                        }(e, i, t, va.CurrencyGroup, va.CurrencyDecimal, s).replace("\xa4", n).replace("\xa4", "").trim()
                                }(function(e) {
                                    if ("string" == typeof e && !isNaN(Number(e) - parseFloat(e))) return Number(e);
                                    if ("number" != typeof e) throw new Error(`${e} is not a number`);
                                    return e
                                }(t), i, o, n, s)
                            } catch (a) {
                                throw function(e, t) {
                                    return Error(`InvalidPipeArgument: '${t}' for pipe '${ye(e)}'`)
                                }(e, a.message)
                            }
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Xs(xo), Xs(To))
                    }, e.\u0275pipe = ht({
                        name: "currency",
                        type: e,
                        pure: !0
                    }), e
                })(),
                Na = (() => {
                    class e {}
                    return e.\u0275mod = lt({
                        type: e
                    }), e.\u0275inj = le({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [{
                            provide: Ca,
                            useClass: Ea
                        }]
                    }), e
                })();
            class Aa {}
            class Da {}
            class Ra {
                constructor(e) {
                    this.normalizedNames = new Map, this.lazyUpdate = null, e ? this.lazyInit = "string" == typeof e ? () => {
                        this.headers = new Map, e.split("\n").forEach(e => {
                            const t = e.indexOf(":");
                            if (t > 0) {
                                const n = e.slice(0, t),
                                    r = n.toLowerCase(),
                                    s = e.slice(t + 1).trim();
                                this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s])
                            }
                        })
                    } : () => {
                        this.headers = new Map, Object.keys(e).forEach(t => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(t, r))
                        })
                    } : this.headers = new Map
                }
                has(e) {
                    return this.init(), this.headers.has(e.toLowerCase())
                }
                get(e) {
                    this.init();
                    const t = this.headers.get(e.toLowerCase());
                    return t && t.length > 0 ? t[0] : null
                }
                keys() {
                    return this.init(), Array.from(this.normalizedNames.values())
                }
                getAll(e) {
                    return this.init(), this.headers.get(e.toLowerCase()) || null
                }
                append(e, t) {
                    return this.clone({
                        name: e,
                        value: t,
                        op: "a"
                    })
                }
                set(e, t) {
                    return this.clone({
                        name: e,
                        value: t,
                        op: "s"
                    })
                }
                delete(e, t) {
                    return this.clone({
                        name: e,
                        value: t,
                        op: "d"
                    })
                }
                maybeSetNormalizedName(e, t) {
                    this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
                }
                init() {
                    this.lazyInit && (this.lazyInit instanceof Ra ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), this.lazyUpdate = null))
                }
                copyFrom(e) {
                    e.init(), Array.from(e.headers.keys()).forEach(t => {
                        this.headers.set(t, e.headers.get(t)), this.normalizedNames.set(t, e.normalizedNames.get(t))
                    })
                }
                clone(e) {
                    const t = new Ra;
                    return t.lazyInit = this.lazyInit && this.lazyInit instanceof Ra ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([e]), t
                }
                applyUpdate(e) {
                    const t = e.name.toLowerCase();
                    switch (e.op) {
                        case "a":
                        case "s":
                            let n = e.value;
                            if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                            this.maybeSetNormalizedName(e.name, t);
                            const r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                            r.push(...n), this.headers.set(t, r);
                            break;
                        case "d":
                            const s = e.value;
                            if (s) {
                                let e = this.headers.get(t);
                                if (!e) return;
                                e = e.filter(e => -1 === s.indexOf(e)), 0 === e.length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, e)
                            } else this.headers.delete(t), this.normalizedNames.delete(t)
                    }
                }
                forEach(e) {
                    this.init(), Array.from(this.normalizedNames.keys()).forEach(t => e(this.normalizedNames.get(t), this.headers.get(t)))
                }
            }
            class Oa {
                encodeKey(e) {
                    return Pa(e)
                }
                encodeValue(e) {
                    return Pa(e)
                }
                decodeKey(e) {
                    return decodeURIComponent(e)
                }
                decodeValue(e) {
                    return decodeURIComponent(e)
                }
            }

            function Pa(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
            }
            class La {
                constructor(e = {}) {
                    if (this.updates = null, this.cloneFrom = null, this.encoder = e.encoder || new Oa, e.fromString) {
                        if (e.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                        this.map = function(e, t) {
                            const n = new Map;
                            return e.length > 0 && e.split("&").forEach(e => {
                                const r = e.indexOf("="),
                                    [s, i] = -1 == r ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, r)), t.decodeValue(e.slice(r + 1))],
                                    o = n.get(s) || [];
                                o.push(i), n.set(s, o)
                            }), n
                        }(e.fromString, this.encoder)
                    } else e.fromObject ? (this.map = new Map, Object.keys(e.fromObject).forEach(t => {
                        const n = e.fromObject[t];
                        this.map.set(t, Array.isArray(n) ? n : [n])
                    })) : this.map = null
                }
                has(e) {
                    return this.init(), this.map.has(e)
                }
                get(e) {
                    this.init();
                    const t = this.map.get(e);
                    return t ? t[0] : null
                }
                getAll(e) {
                    return this.init(), this.map.get(e) || null
                }
                keys() {
                    return this.init(), Array.from(this.map.keys())
                }
                append(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "a"
                    })
                }
                set(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "s"
                    })
                }
                delete(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "d"
                    })
                }
                toString() {
                    return this.init(), this.keys().map(e => {
                        const t = this.encoder.encodeKey(e);
                        return this.map.get(e).map(e => t + "=" + this.encoder.encodeValue(e)).join("&")
                    }).filter(e => "" !== e).join("&")
                }
                clone(e) {
                    const t = new La({
                        encoder: this.encoder
                    });
                    return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat([e]), t
                }
                init() {
                    null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(e => this.map.set(e, this.cloneFrom.map.get(e))), this.updates.forEach(e => {
                        switch (e.op) {
                            case "a":
                            case "s":
                                const t = ("a" === e.op ? this.map.get(e.param) : void 0) || [];
                                t.push(e.value), this.map.set(e.param, t);
                                break;
                            case "d":
                                if (void 0 === e.value) {
                                    this.map.delete(e.param);
                                    break
                                } {
                                    let t = this.map.get(e.param) || [];
                                    const n = t.indexOf(e.value); - 1 !== n && t.splice(n, 1), t.length > 0 ? this.map.set(e.param, t) : this.map.delete(e.param)
                                }
                        }
                    }), this.cloneFrom = this.updates = null)
                }
            }

            function ja(e) {
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            }

            function Fa(e) {
                return "undefined" != typeof Blob && e instanceof Blob
            }

            function Ma(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            }
            class Va {
                constructor(e, t, n, r) {
                    let s;
                    if (this.url = t, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = e.toUpperCase(), function(e) {
                            switch (e) {
                                case "DELETE":
                                case "GET":
                                case "HEAD":
                                case "OPTIONS":
                                case "JSONP":
                                    return !1;
                                default:
                                    return !0
                            }
                        }(this.method) || r ? (this.body = void 0 !== n ? n : null, s = r) : s = n, s && (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.params && (this.params = s.params)), this.headers || (this.headers = new Ra), this.params) {
                        const e = this.params.toString();
                        if (0 === e.length) this.urlWithParams = t;
                        else {
                            const n = t.indexOf("?");
                            this.urlWithParams = t + (-1 === n ? "?" : n < t.length - 1 ? "&" : "") + e
                        }
                    } else this.params = new La, this.urlWithParams = t
                }
                serializeBody() {
                    return null === this.body ? null : ja(this.body) || Fa(this.body) || Ma(this.body) || "string" == typeof this.body ? this.body : this.body instanceof La ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                }
                detectContentTypeHeader() {
                    return null === this.body || Ma(this.body) ? null : Fa(this.body) ? this.body.type || null : ja(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof La ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
                }
                clone(e = {}) {
                    const t = e.method || this.method,
                        n = e.url || this.url,
                        r = e.responseType || this.responseType,
                        s = void 0 !== e.body ? e.body : this.body,
                        i = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
                        o = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress;
                    let a = e.headers || this.headers,
                        l = e.params || this.params;
                    return void 0 !== e.setHeaders && (a = Object.keys(e.setHeaders).reduce((t, n) => t.set(n, e.setHeaders[n]), a)), e.setParams && (l = Object.keys(e.setParams).reduce((t, n) => t.set(n, e.setParams[n]), l)), new Va(t, n, s, {
                        params: l,
                        headers: a,
                        reportProgress: o,
                        responseType: r,
                        withCredentials: i
                    })
                }
            }
            const Ha = function() {
                var e = {
                    Sent: 0,
                    UploadProgress: 1,
                    ResponseHeader: 2,
                    DownloadProgress: 3,
                    Response: 4,
                    User: 5
                };
                return e[e.Sent] = "Sent", e[e.UploadProgress] = "UploadProgress", e[e.ResponseHeader] = "ResponseHeader", e[e.DownloadProgress] = "DownloadProgress", e[e.Response] = "Response", e[e.User] = "User", e
            }();
            class $a {
                constructor(e, t = 200, n = "OK") {
                    this.headers = e.headers || new Ra, this.status = void 0 !== e.status ? e.status : t, this.statusText = e.statusText || n, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
                }
            }
            class za extends $a {
                constructor(e = {}) {
                    super(e), this.type = Ha.ResponseHeader
                }
                clone(e = {}) {
                    return new za({
                        headers: e.headers || this.headers,
                        status: void 0 !== e.status ? e.status : this.status,
                        statusText: e.statusText || this.statusText,
                        url: e.url || this.url || void 0
                    })
                }
            }
            class Ua extends $a {
                constructor(e = {}) {
                    super(e), this.type = Ha.Response, this.body = void 0 !== e.body ? e.body : null
                }
                clone(e = {}) {
                    return new Ua({
                        body: void 0 !== e.body ? e.body : this.body,
                        headers: e.headers || this.headers,
                        status: void 0 !== e.status ? e.status : this.status,
                        statusText: e.statusText || this.statusText,
                        url: e.url || this.url || void 0
                    })
                }
            }
            class Ba extends $a {
                constructor(e) {
                    super(e, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${e.url||"(unknown url)"}` : `Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`, this.error = e.error || null
                }
            }

            function Za(e, t) {
                return {
                    body: t,
                    headers: e.headers,
                    observe: e.observe,
                    params: e.params,
                    reportProgress: e.reportProgress,
                    responseType: e.responseType,
                    withCredentials: e.withCredentials
                }
            }
            let Ka = (() => {
                class e {
                    constructor(e) {
                        this.handler = e
                    }
                    request(e, t, n = {}) {
                        let r;
                        if (e instanceof Va) r = e;
                        else {
                            let s = void 0;
                            s = n.headers instanceof Ra ? n.headers : new Ra(n.headers);
                            let i = void 0;
                            n.params && (i = n.params instanceof La ? n.params : new La({
                                fromObject: n.params
                            })), r = new Va(e, t, void 0 !== n.body ? n.body : null, {
                                headers: s,
                                params: i,
                                reportProgress: n.reportProgress,
                                responseType: n.responseType || "json",
                                withCredentials: n.withCredentials
                            })
                        }
                        const s = la(r).pipe(ua(e => this.handler.handle(e)));
                        if (e instanceof Va || "events" === n.observe) return s;
                        const i = s.pipe((o = e => e instanceof Ua, function(e) {
                            return e.lift(new ca(o, void 0))
                        }));
                        var o;
                        switch (n.observe || "body") {
                            case "body":
                                switch (r.responseType) {
                                    case "arraybuffer":
                                        return i.pipe(L(e => {
                                            if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                            return e.body
                                        }));
                                    case "blob":
                                        return i.pipe(L(e => {
                                            if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                            return e.body
                                        }));
                                    case "text":
                                        return i.pipe(L(e => {
                                            if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                                            return e.body
                                        }));
                                    case "json":
                                    default:
                                        return i.pipe(L(e => e.body))
                                }
                                case "response":
                                    return i;
                                default:
                                    throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
                        }
                    }
                    delete(e, t = {}) {
                        return this.request("DELETE", e, t)
                    }
                    get(e, t = {}) {
                        return this.request("GET", e, t)
                    }
                    head(e, t = {}) {
                        return this.request("HEAD", e, t)
                    }
                    jsonp(e, t) {
                        return this.request("JSONP", e, {
                            params: (new La).append(t, "JSONP_CALLBACK"),
                            observe: "body",
                            responseType: "json"
                        })
                    }
                    options(e, t = {}) {
                        return this.request("OPTIONS", e, t)
                    }
                    patch(e, t, n = {}) {
                        return this.request("PATCH", e, Za(n, t))
                    }
                    post(e, t, n = {}) {
                        return this.request("POST", e, Za(n, t))
                    }
                    put(e, t, n = {}) {
                        return this.request("PUT", e, Za(n, t))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(Aa))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class Wa {
                constructor(e, t) {
                    this.next = e, this.interceptor = t
                }
                handle(e) {
                    return this.interceptor.intercept(e, this.next)
                }
            }
            const qa = new Le("HTTP_INTERCEPTORS");
            let Ga = (() => {
                class e {
                    intercept(e, t) {
                        return t.handle(e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Ya = /^\)\]\}',?\n/;
            class Ja {}
            let Qa = (() => {
                    class e {
                        constructor() {}
                        build() {
                            return new XMLHttpRequest
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                Xa = (() => {
                    class e {
                        constructor(e) {
                            this.xhrFactory = e
                        }
                        handle(e) {
                            if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                            return new v(t => {
                                const n = this.xhrFactory.build();
                                if (n.open(e.method, e.urlWithParams), e.withCredentials && (n.withCredentials = !0), e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(","))), e.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !e.headers.has("Content-Type")) {
                                    const t = e.detectContentTypeHeader();
                                    null !== t && n.setRequestHeader("Content-Type", t)
                                }
                                if (e.responseType) {
                                    const t = e.responseType.toLowerCase();
                                    n.responseType = "json" !== t ? t : "text"
                                }
                                const r = e.serializeBody();
                                let s = null;
                                const i = () => {
                                        if (null !== s) return s;
                                        const t = 1223 === n.status ? 204 : n.status,
                                            r = n.statusText || "OK",
                                            i = new Ra(n.getAllResponseHeaders()),
                                            o = function(e) {
                                                return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
                                            }(n) || e.url;
                                        return s = new za({
                                            headers: i,
                                            status: t,
                                            statusText: r,
                                            url: o
                                        }), s
                                    },
                                    o = () => {
                                        let {
                                            headers: r,
                                            status: s,
                                            statusText: o,
                                            url: a
                                        } = i(), l = null;
                                        204 !== s && (l = void 0 === n.response ? n.responseText : n.response), 0 === s && (s = l ? 200 : 0);
                                        let u = s >= 200 && s < 300;
                                        if ("json" === e.responseType && "string" == typeof l) {
                                            const e = l;
                                            l = l.replace(Ya, "");
                                            try {
                                                l = "" !== l ? JSON.parse(l) : null
                                            } catch (c) {
                                                l = e, u && (u = !1, l = {
                                                    error: c,
                                                    text: l
                                                })
                                            }
                                        }
                                        u ? (t.next(new Ua({
                                            body: l,
                                            headers: r,
                                            status: s,
                                            statusText: o,
                                            url: a || void 0
                                        })), t.complete()) : t.error(new Ba({
                                            error: l,
                                            headers: r,
                                            status: s,
                                            statusText: o,
                                            url: a || void 0
                                        }))
                                    },
                                    a = e => {
                                        const {
                                            url: r
                                        } = i(), s = new Ba({
                                            error: e,
                                            status: n.status || 0,
                                            statusText: n.statusText || "Unknown Error",
                                            url: r || void 0
                                        });
                                        t.error(s)
                                    };
                                let l = !1;
                                const u = r => {
                                        l || (t.next(i()), l = !0);
                                        let s = {
                                            type: Ha.DownloadProgress,
                                            loaded: r.loaded
                                        };
                                        r.lengthComputable && (s.total = r.total), "text" === e.responseType && n.responseText && (s.partialText = n.responseText), t.next(s)
                                    },
                                    c = e => {
                                        let n = {
                                            type: Ha.UploadProgress,
                                            loaded: e.loaded
                                        };
                                        e.lengthComputable && (n.total = e.total), t.next(n)
                                    };
                                return n.addEventListener("load", o), n.addEventListener("error", a), e.reportProgress && (n.addEventListener("progress", u), null !== r && n.upload && n.upload.addEventListener("progress", c)), n.send(r), t.next({
                                    type: Ha.Sent
                                }), () => {
                                    n.removeEventListener("error", a), n.removeEventListener("load", o), e.reportProgress && (n.removeEventListener("progress", u), null !== r && n.upload && n.upload.removeEventListener("progress", c)), n.abort()
                                }
                            })
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(Ja))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            const el = new Le("XSRF_COOKIE_NAME"),
                tl = new Le("XSRF_HEADER_NAME");
            class nl {}
            let rl = (() => {
                    class e {
                        constructor(e, t, n) {
                            this.doc = e, this.platform = t, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                        }
                        getToken() {
                            if ("server" === this.platform) return null;
                            const e = this.doc.cookie || "";
                            return e !== this.lastCookieString && (this.parseCount++, this.lastToken = xa(e, this.cookieName), this.lastCookieString = e), this.lastToken
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(pa), Ze(bo), Ze(el))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                sl = (() => {
                    class e {
                        constructor(e, t) {
                            this.tokenService = e, this.headerName = t
                        }
                        intercept(e, t) {
                            const n = e.url.toLowerCase();
                            if ("GET" === e.method || "HEAD" === e.method || n.startsWith("http://") || n.startsWith("https://")) return t.handle(e);
                            const r = this.tokenService.getToken();
                            return null === r || e.headers.has(this.headerName) || (e = e.clone({
                                headers: e.headers.set(this.headerName, r)
                            })), t.handle(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(nl), Ze(tl))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                il = (() => {
                    class e {
                        constructor(e, t) {
                            this.backend = e, this.injector = t, this.chain = null
                        }
                        handle(e) {
                            if (null === this.chain) {
                                const e = this.injector.get(qa, []);
                                this.chain = e.reduceRight((e, t) => new Wa(e, t), this.backend)
                            }
                            return this.chain.handle(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(Da), Ze(Vs))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                ol = (() => {
                    class e {
                        static disable() {
                            return {
                                ngModule: e,
                                providers: [{
                                    provide: sl,
                                    useClass: Ga
                                }]
                            }
                        }
                        static withOptions(t = {}) {
                            return {
                                ngModule: e,
                                providers: [t.cookieName ? {
                                    provide: el,
                                    useValue: t.cookieName
                                } : [], t.headerName ? {
                                    provide: tl,
                                    useValue: t.headerName
                                } : []]
                            }
                        }
                    }
                    return e.\u0275mod = lt({
                        type: e
                    }), e.\u0275inj = le({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [sl, {
                            provide: qa,
                            useExisting: sl,
                            multi: !0
                        }, {
                            provide: nl,
                            useClass: rl
                        }, {
                            provide: el,
                            useValue: "XSRF-TOKEN"
                        }, {
                            provide: tl,
                            useValue: "X-XSRF-TOKEN"
                        }]
                    }), e
                })(),
                al = (() => {
                    class e {}
                    return e.\u0275mod = lt({
                        type: e
                    }), e.\u0275inj = le({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [Ka, {
                            provide: Aa,
                            useClass: il
                        }, Xa, {
                            provide: Da,
                            useExisting: Xa
                        }, Qa, {
                            provide: Ja,
                            useExisting: Qa
                        }],
                        imports: [
                            [ol.withOptions({
                                cookieName: "XSRF-TOKEN",
                                headerName: "X-XSRF-TOKEN"
                            })]
                        ]
                    }), e
                })();
            const ll = (() => {
                    const e = Element.prototype;
                    return e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                })(),
                ul = {
                    schedule(e, t) {
                        const n = setTimeout(e, t);
                        return () => clearTimeout(n)
                    },
                    scheduleBeforeRender(e) {
                        if ("undefined" == typeof window) return ul.schedule(e, 0);
                        if (void 0 === window.requestAnimationFrame) return ul.schedule(e, 16);
                        const t = window.requestAnimationFrame(e);
                        return () => window.cancelAnimationFrame(t)
                    }
                };

            function cl(e, t, n) {
                let r = n;
                return function(e) {
                    return !!e && e.nodeType === Node.ELEMENT_NODE
                }(e) && t.some((t, n) => !("*" === t || ! function(e, t) {
                    return ll.call(e, t)
                }(e, t) || (r = n, 0))), r
            }
            class hl {
                constructor(e, t) {
                    this.component = e, this.injector = t, this.componentFactory = t.get(mi).resolveComponentFactory(e)
                }
                create(e) {
                    return new dl(this.componentFactory, e)
                }
            }
            class dl {
                constructor(e, t) {
                    this.componentFactory = e, this.injector = t, this.inputChanges = null, this.implementsOnChanges = !1, this.scheduledChangeDetectionFn = null, this.scheduledDestroyFn = null, this.initialInputValues = new Map, this.unchangedInputs = new Set
                }
                connect(e) {
                    if (null !== this.scheduledDestroyFn) return this.scheduledDestroyFn(), void(this.scheduledDestroyFn = null);
                    this.componentRef || this.initializeComponent(e)
                }
                disconnect() {
                    this.componentRef && null === this.scheduledDestroyFn && (this.scheduledDestroyFn = ul.schedule(() => {
                        this.componentRef && (this.componentRef.destroy(), this.componentRef = null)
                    }, 10))
                }
                getInputValue(e) {
                    return this.componentRef ? this.componentRef.instance[e] : this.initialInputValues.get(e)
                }
                setInputValue(e, t) {
                    var n, r;
                    this.componentRef ? ((n = t) !== (r = this.getInputValue(e)) && (n == n || r == r) || void 0 === t && this.unchangedInputs.has(e)) && (this.recordInputChange(e, t), this.componentRef.instance[e] = t, this.scheduleDetectChanges()) : this.initialInputValues.set(e, t)
                }
                initializeComponent(e) {
                    const t = Vs.create({
                            providers: [],
                            parent: this.injector
                        }),
                        n = function(e, t) {
                            const n = e.childNodes,
                                r = t.map(() => []);
                            let s = -1;
                            t.some((e, t) => "*" === e && (s = t, !0));
                            for (let i = 0, o = n.length; i < o; ++i) {
                                const e = n[i],
                                    o = cl(e, t, s); - 1 !== o && r[o].push(e)
                            }
                            return r
                        }(e, this.componentFactory.ngContentSelectors);
                    this.componentRef = this.componentFactory.create(t, n, e), this.implementsOnChanges = "function" == typeof this.componentRef.instance.ngOnChanges, this.initializeInputs(), this.initializeOutputs(), this.detectChanges(), this.injector.get(na).attachView(this.componentRef.hostView)
                }
                initializeInputs() {
                    this.componentFactory.inputs.forEach(({
                        propName: e
                    }) => {
                        this.implementsOnChanges && this.unchangedInputs.add(e), this.initialInputValues.has(e) && this.setInputValue(e, this.initialInputValues.get(e))
                    }), this.initialInputValues.clear()
                }
                initializeOutputs() {
                    const e = this.componentFactory.outputs.map(({
                        propName: e,
                        templateName: t
                    }) => this.componentRef.instance[e].pipe(L(e => ({
                        name: t,
                        value: e
                    }))));
                    this.events = Z(...e)
                }
                callNgOnChanges() {
                    if (!this.implementsOnChanges || null === this.inputChanges) return;
                    const e = this.inputChanges;
                    this.inputChanges = null, this.componentRef.instance.ngOnChanges(e)
                }
                scheduleDetectChanges() {
                    this.scheduledChangeDetectionFn || (this.scheduledChangeDetectionFn = ul.scheduleBeforeRender(() => {
                        this.scheduledChangeDetectionFn = null, this.detectChanges()
                    }))
                }
                recordInputChange(e, t) {
                    if (this.componentRef && !this.implementsOnChanges) return;
                    null === this.inputChanges && (this.inputChanges = {});
                    const n = this.inputChanges[e];
                    if (n) return void(n.currentValue = t);
                    const r = this.unchangedInputs.has(e);
                    this.unchangedInputs.delete(e);
                    const s = r ? void 0 : this.getInputValue(e);
                    this.inputChanges[e] = new fi(s, t, r)
                }
                detectChanges() {
                    this.componentRef && (this.callNgOnChanges(), this.componentRef.changeDetectorRef.detectChanges())
                }
            }
            class fl extends HTMLElement {
                constructor() {
                    super(...arguments), this.ngElementEventsSubscription = null
                }
            }
            class pl extends class extends class {} {
                constructor() {
                    super()
                }
                supportsDOMEvents() {
                    return !0
                }
            } {
                static makeCurrent() {
                    var e;
                    e = new pl, da || (da = e)
                }
                getProperty(e, t) {
                    return e[t]
                }
                log(e) {
                    window.console && window.console.log && window.console.log(e)
                }
                logGroup(e) {
                    window.console && window.console.group && window.console.group(e)
                }
                logGroupEnd() {
                    window.console && window.console.groupEnd && window.console.groupEnd()
                }
                onAndCancel(e, t, n) {
                    return e.addEventListener(t, n, !1), () => {
                        e.removeEventListener(t, n, !1)
                    }
                }
                dispatchEvent(e, t) {
                    e.dispatchEvent(t)
                }
                remove(e) {
                    return e.parentNode && e.parentNode.removeChild(e), e
                }
                getValue(e) {
                    return e.value
                }
                createElement(e, t) {
                    return (t = t || this.getDefaultDocument()).createElement(e)
                }
                createHtmlDocument() {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
                getDefaultDocument() {
                    return document
                }
                isElementNode(e) {
                    return e.nodeType === Node.ELEMENT_NODE
                }
                isShadowRoot(e) {
                    return e instanceof DocumentFragment
                }
                getGlobalEventTarget(e, t) {
                    return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
                }
                getHistory() {
                    return window.history
                }
                getLocation() {
                    return window.location
                }
                getBaseHref(e) {
                    const t = ml || (ml = document.querySelector("base"), ml) ? ml.getAttribute("href") : null;
                    return null == t ? null : (n = t, gl || (gl = document.createElement("a")), gl.setAttribute("href", n), "/" === gl.pathname.charAt(0) ? gl.pathname : "/" + gl.pathname);
                    var n
                }
                resetBaseElement() {
                    ml = null
                }
                getUserAgent() {
                    return window.navigator.userAgent
                }
                performanceNow() {
                    return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                }
                supportsCookies() {
                    return !0
                }
                getCookie(e) {
                    return xa(document.cookie, e)
                }
            }
            let gl, ml = null;
            const yl = new Le("TRANSITION_ID"),
                vl = [{
                    provide: go,
                    useFactory: function(e, t, n) {
                        return () => {
                            n.get(mo).donePromise.then(() => {
                                const n = fa();
                                Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t => t.getAttribute("ng-transition") === e).forEach(e => n.remove(e))
                            })
                        }
                    },
                    deps: [yl, pa, Vs],
                    multi: !0
                }];
            class wl {
                static init() {
                    var e;
                    e = new wl, Go = e
                }
                addToWindow(e) {
                    ke.getAngularTestability = (t, n = !0) => {
                        const r = e.findTestabilityInTree(t, n);
                        if (null == r) throw new Error("Could not find testability for element.");
                        return r
                    }, ke.getAllAngularTestabilities = () => e.getAllTestabilities(), ke.getAllAngularRootElements = () => e.getAllRootElements(), ke.frameworkStabilizers || (ke.frameworkStabilizers = []), ke.frameworkStabilizers.push(e => {
                        const t = ke.getAllAngularTestabilities();
                        let n = t.length,
                            r = !1;
                        const s = function(t) {
                            r = r || t, n--, 0 == n && e(r)
                        };
                        t.forEach((function(e) {
                            e.whenStable(s)
                        }))
                    })
                }
                findTestabilityInTree(e, t, n) {
                    if (null == t) return null;
                    const r = e.getTestability(t);
                    return null != r ? r : n ? fa().isShadowRoot(t) ? this.findTestabilityInTree(e, t.host, !0) : this.findTestabilityInTree(e, t.parentElement, !0) : null
                }
            }
            const _l = new Le("EventManagerPlugins");
            let bl = (() => {
                class e {
                    constructor(e, t) {
                        this._zone = t, this._eventNameToPlugin = new Map, e.forEach(e => e.manager = this), this._plugins = e.slice().reverse()
                    }
                    addEventListener(e, t, n) {
                        return this._findPluginFor(t).addEventListener(e, t, n)
                    }
                    addGlobalEventListener(e, t, n) {
                        return this._findPluginFor(t).addGlobalEventListener(e, t, n)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(e) {
                        const t = this._eventNameToPlugin.get(e);
                        if (t) return t;
                        const n = this._plugins;
                        for (let r = 0; r < n.length; r++) {
                            const t = n[r];
                            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t
                        }
                        throw new Error(`No event manager plugin found for event ${e}`)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(_l), Ze(Fo))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class Cl {
                constructor(e) {
                    this._doc = e
                }
                addGlobalEventListener(e, t, n) {
                    const r = fa().getGlobalEventTarget(this._doc, e);
                    if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
                    return this.addEventListener(r, t, n)
                }
            }
            let El = (() => {
                    class e {
                        constructor() {
                            this._stylesSet = new Set
                        }
                        addStyles(e) {
                            const t = new Set;
                            e.forEach(e => {
                                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e))
                            }), this.onStylesAdded(t)
                        }
                        onStylesAdded(e) {}
                        getAllStyles() {
                            return Array.from(this._stylesSet)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                xl = (() => {
                    class e extends El {
                        constructor(e) {
                            super(), this._doc = e, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(e.head)
                        }
                        _addStylesToHost(e, t) {
                            e.forEach(e => {
                                const n = this._doc.createElement("style");
                                n.textContent = e, this._styleNodes.add(t.appendChild(n))
                            })
                        }
                        addHost(e) {
                            this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
                        }
                        removeHost(e) {
                            this._hostNodes.delete(e)
                        }
                        onStylesAdded(e) {
                            this._hostNodes.forEach(t => this._addStylesToHost(e, t))
                        }
                        ngOnDestroy() {
                            this._styleNodes.forEach(e => fa().remove(e))
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(pa))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            const Tl = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                Sl = /%COMP%/g;

            function kl(e, t, n) {
                for (let r = 0; r < t.length; r++) {
                    let s = t[r];
                    Array.isArray(s) ? kl(e, s, n) : (s = s.replace(Sl, e), n.push(s))
                }
                return n
            }

            function Il(e) {
                return t => {
                    if ("__ngUnwrap__" === t) return e;
                    !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
                }
            }
            let Nl = (() => {
                class e {
                    constructor(e, t, n) {
                        this.eventManager = e, this.sharedStylesHost = t, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new Al(e)
                    }
                    createRenderer(e, t) {
                        if (!e || !t) return this.defaultRenderer;
                        switch (t.encapsulation) {
                            case et.Emulated: {
                                let n = this.rendererByCompId.get(t.id);
                                return n || (n = new Dl(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n
                            }
                            case et.Native:
                            case et.ShadowDom:
                                return new Rl(this.eventManager, this.sharedStylesHost, e, t);
                            default:
                                if (!this.rendererByCompId.has(t.id)) {
                                    const e = kl(t.id, t.styles, []);
                                    this.sharedStylesHost.addStyles(e), this.rendererByCompId.set(t.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(bl), Ze(xl), Ze(yo))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class Al {
                constructor(e) {
                    this.eventManager = e, this.data = Object.create(null)
                }
                destroy() {}
                createElement(e, t) {
                    return t ? document.createElementNS(Tl[t] || t, e) : document.createElement(e)
                }
                createComment(e) {
                    return document.createComment(e)
                }
                createText(e) {
                    return document.createTextNode(e)
                }
                appendChild(e, t) {
                    e.appendChild(t)
                }
                insertBefore(e, t, n) {
                    e && e.insertBefore(t, n)
                }
                removeChild(e, t) {
                    e && e.removeChild(t)
                }
                selectRootElement(e, t) {
                    let n = "string" == typeof e ? document.querySelector(e) : e;
                    if (!n) throw new Error(`The selector "${e}" did not match any elements`);
                    return t || (n.textContent = ""), n
                }
                parentNode(e) {
                    return e.parentNode
                }
                nextSibling(e) {
                    return e.nextSibling
                }
                setAttribute(e, t, n, r) {
                    if (r) {
                        t = r + ":" + t;
                        const s = Tl[r];
                        s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n)
                    } else e.setAttribute(t, n)
                }
                removeAttribute(e, t, n) {
                    if (n) {
                        const r = Tl[n];
                        r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`)
                    } else e.removeAttribute(t)
                }
                addClass(e, t) {
                    e.classList.add(t)
                }
                removeClass(e, t) {
                    e.classList.remove(t)
                }
                setStyle(e, t, n, r) {
                    r & _i.DashCase ? e.style.setProperty(t, n, r & _i.Important ? "important" : "") : e.style[t] = n
                }
                removeStyle(e, t, n) {
                    n & _i.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
                }
                setProperty(e, t, n) {
                    e[t] = n
                }
                setValue(e, t) {
                    e.nodeValue = t
                }
                listen(e, t, n) {
                    return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, Il(n)) : this.eventManager.addEventListener(e, t, Il(n))
                }
            }
            class Dl extends Al {
                constructor(e, t, n, r) {
                    super(e), this.component = n;
                    const s = kl(r + "-" + n.id, n.styles, []);
                    t.addStyles(s), this.contentAttr = "_ngcontent-%COMP%".replace(Sl, r + "-" + n.id), this.hostAttr = function(e) {
                        return "_nghost-%COMP%".replace(Sl, e)
                    }(r + "-" + n.id)
                }
                applyToHost(e) {
                    super.setAttribute(e, this.hostAttr, "")
                }
                createElement(e, t) {
                    const n = super.createElement(e, t);
                    return super.setAttribute(n, this.contentAttr, ""), n
                }
            }
            class Rl extends Al {
                constructor(e, t, n, r) {
                    super(e), this.sharedStylesHost = t, this.hostEl = n, this.component = r, this.shadowRoot = r.encapsulation === et.ShadowDom ? n.attachShadow({
                        mode: "open"
                    }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
                    const s = kl(r.id, r.styles, []);
                    for (let i = 0; i < s.length; i++) {
                        const e = document.createElement("style");
                        e.textContent = s[i], this.shadowRoot.appendChild(e)
                    }
                }
                nodeOrShadowRoot(e) {
                    return e === this.hostEl ? this.shadowRoot : e
                }
                destroy() {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }
                appendChild(e, t) {
                    return super.appendChild(this.nodeOrShadowRoot(e), t)
                }
                insertBefore(e, t, n) {
                    return super.insertBefore(this.nodeOrShadowRoot(e), t, n)
                }
                removeChild(e, t) {
                    return super.removeChild(this.nodeOrShadowRoot(e), t)
                }
                parentNode(e) {
                    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
                }
            }
            let Ol = (() => {
                class e extends Cl {
                    constructor(e) {
                        super(e)
                    }
                    supports(e) {
                        return !0
                    }
                    addEventListener(e, t, n) {
                        return e.addEventListener(t, n, !1), () => this.removeEventListener(e, t, n)
                    }
                    removeEventListener(e, t, n) {
                        return e.removeEventListener(t, n)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(pa))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Pl = ["alt", "control", "meta", "shift"],
                Ll = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                jl = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                },
                Fl = {
                    alt: e => e.altKey,
                    control: e => e.ctrlKey,
                    meta: e => e.metaKey,
                    shift: e => e.shiftKey
                };
            let Ml = (() => {
                class e extends Cl {
                    constructor(e) {
                        super(e)
                    }
                    supports(t) {
                        return null != e.parseEventName(t)
                    }
                    addEventListener(t, n, r) {
                        const s = e.parseEventName(n),
                            i = e.eventCallback(s.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => fa().onAndCancel(t, s.domEventName, i))
                    }
                    static parseEventName(t) {
                        const n = t.toLowerCase().split("."),
                            r = n.shift();
                        if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
                        const s = e._normalizeKey(n.pop());
                        let i = "";
                        if (Pl.forEach(e => {
                                const t = n.indexOf(e);
                                t > -1 && (n.splice(t, 1), i += e + ".")
                            }), i += s, 0 != n.length || 0 === s.length) return null;
                        const o = {};
                        return o.domEventName = r, o.fullKey = i, o
                    }
                    static getEventFullKey(e) {
                        let t = "",
                            n = function(e) {
                                let t = e.key;
                                if (null == t) {
                                    if (t = e.keyIdentifier, null == t) return "Unidentified";
                                    t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && jl.hasOwnProperty(t) && (t = jl[t]))
                                }
                                return Ll[t] || t
                            }(e);
                        return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), Pl.forEach(r => {
                            r != n && (0, Fl[r])(e) && (t += r + ".")
                        }), t += n, t
                    }
                    static eventCallback(t, n, r) {
                        return s => {
                            e.getEventFullKey(s) === t && r.runGuarded(() => n(s))
                        }
                    }
                    static _normalizeKey(e) {
                        switch (e) {
                            case "esc":
                                return "escape";
                            default:
                                return e
                        }
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(pa))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Vl = Qo(sa, "browser", [{
                    provide: bo,
                    useValue: "browser"
                }, {
                    provide: _o,
                    useValue: function() {
                        pl.makeCurrent(), wl.init()
                    },
                    multi: !0
                }, {
                    provide: pa,
                    useFactory: function() {
                        return function(e) {
                            Ct = e
                        }(document), document
                    },
                    deps: []
                }]),
                Hl = [
                    [], {
                        provide: Ss,
                        useValue: "root"
                    }, {
                        provide: zn,
                        useFactory: function() {
                            return new zn
                        },
                        deps: []
                    }, {
                        provide: _l,
                        useClass: Ol,
                        multi: !0,
                        deps: [pa, Fo, bo]
                    }, {
                        provide: _l,
                        useClass: Ml,
                        multi: !0,
                        deps: [pa]
                    },
                    [], {
                        provide: Nl,
                        useClass: Nl,
                        deps: [bl, xl, yo]
                    }, {
                        provide: wi,
                        useExisting: Nl
                    }, {
                        provide: El,
                        useExisting: xl
                    }, {
                        provide: xl,
                        useClass: xl,
                        deps: [pa]
                    }, {
                        provide: Zo,
                        useClass: Zo,
                        deps: [Fo]
                    }, {
                        provide: bl,
                        useClass: bl,
                        deps: [_l, Fo]
                    },
                    []
                ];
            let $l = (() => {
                class e {
                    constructor(e) {
                        if (e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                    }
                    static withServerTransition(t) {
                        return {
                            ngModule: e,
                            providers: [{
                                provide: yo,
                                useValue: t.appId
                            }, {
                                provide: yl,
                                useExisting: yo
                            }, vl]
                        }
                    }
                }
                return e.\u0275mod = lt({
                    type: e
                }), e.\u0275inj = le({
                    factory: function(t) {
                        return new(t || e)(Ze(e, 12))
                    },
                    providers: Hl,
                    imports: [Na, oa]
                }), e
            })();

            function zl(e) {
                return !!e && (e instanceof v || "function" == typeof e.lift && "function" == typeof e.subscribe)
            }

            function Ul(e, t) {
                return new v(n => {
                    const r = e.length;
                    if (0 === r) return void n.complete();
                    const s = new Array(r);
                    let i = 0,
                        o = 0;
                    for (let a = 0; a < r; a++) {
                        const l = V(e[a]);
                        let u = !1;
                        n.add(l.subscribe({
                            next: e => {
                                u || (u = !0, o++), s[a] = e
                            },
                            error: e => n.error(e),
                            complete: () => {
                                i++, i !== r && u || (o === r && n.next(t ? t.reduce((e, t, n) => (e[t] = s[n], e), {}) : s), n.complete())
                            }
                        }))
                    }
                })
            }

            function Bl(...e) {
                return U(1)(la(...e))
            }
            "undefined" != typeof window && window;
            const Zl = new v(e => e.complete());

            function Kl(e) {
                return e ? function(e) {
                    return new v(t => e.schedule(() => t.complete()))
                }(e) : Zl
            }

            function Wl(e) {
                return new v(t => {
                    let n;
                    try {
                        n = e()
                    } catch (r) {
                        return void t.error(r)
                    }
                    return (n ? V(n) : Kl()).subscribe(t)
                })
            }
            const ql = (() => {
                function e() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();

            function Gl(e) {
                return t => 0 === e ? Kl() : t.lift(new Yl(e))
            }
            class Yl {
                constructor(e) {
                    if (this.total = e, this.total < 0) throw new ql
                }
                call(e, t) {
                    return t.subscribe(new Jl(e, this.total))
                }
            }
            class Jl extends p {
                constructor(e, t) {
                    super(e), this.total = t, this.count = 0
                }
                _next(e) {
                    const t = this.total,
                        n = ++this.count;
                    n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
                }
            }
            class Ql extends h {
                constructor(e, t) {
                    super()
                }
                schedule(e, t = 0) {
                    return this
                }
            }
            class Xl extends Ql {
                constructor(e, t) {
                    super(e, t), this.scheduler = e, this.work = t, this.pending = !1
                }
                schedule(e, t = 0) {
                    if (this.closed) return this;
                    this.state = e;
                    const n = this.id,
                        r = this.scheduler;
                    return null != n && (this.id = this.recycleAsyncId(r, n, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(r, this.id, t), this
                }
                requestAsyncId(e, t, n = 0) {
                    return setInterval(e.flush.bind(e, this), n)
                }
                recycleAsyncId(e, t, n = 0) {
                    if (null !== n && this.delay === n && !1 === this.pending) return t;
                    clearInterval(t)
                }
                execute(e, t) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    const n = this._execute(e, t);
                    if (n) return n;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }
                _execute(e, t) {
                    let n = !1,
                        r = void 0;
                    try {
                        this.work(e)
                    } catch (s) {
                        n = !0, r = !!s && s || new Error(s)
                    }
                    if (n) return this.unsubscribe(), r
                }
                _unsubscribe() {
                    const e = this.id,
                        t = this.scheduler,
                        n = t.actions,
                        r = n.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
                }
            }
            class eu extends Xl {
                constructor(e, t) {
                    super(e, t), this.scheduler = e, this.work = t
                }
                schedule(e, t = 0) {
                    return t > 0 ? super.schedule(e, t) : (this.delay = t, this.state = e, this.scheduler.flush(this), this)
                }
                execute(e, t) {
                    return t > 0 || this.closed ? super.execute(e, t) : this._execute(e, t)
                }
                requestAsyncId(e, t, n = 0) {
                    return null !== n && n > 0 || null === n && this.delay > 0 ? super.requestAsyncId(e, t, n) : e.flush(this)
                }
            }
            let tu = (() => {
                class e {
                    constructor(t, n = e.now) {
                        this.SchedulerAction = t, this.now = n
                    }
                    schedule(e, t = 0, n) {
                        return new this.SchedulerAction(this, e).schedule(n, t)
                    }
                }
                return e.now = () => Date.now(), e
            })();
            class nu extends tu {
                constructor(e, t = tu.now) {
                    super(e, () => nu.delegate && nu.delegate !== this ? nu.delegate.now() : t()), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                schedule(e, t = 0, n) {
                    return nu.delegate && nu.delegate !== this ? nu.delegate.schedule(e, t, n) : super.schedule(e, t, n)
                }
                flush(e) {
                    const {
                        actions: t
                    } = this;
                    if (this.active) return void t.push(e);
                    let n;
                    this.active = !0;
                    do {
                        if (n = e.execute(e.state, e.delay)) break
                    } while (e = t.shift());
                    if (this.active = !1, n) {
                        for (; e = t.shift();) e.unsubscribe();
                        throw n
                    }
                }
            }
            class ru extends nu {}
            const su = new ru(eu);
            let iu = (() => {
                class e {
                    constructor(e, t, n) {
                        this.kind = e, this.value = t, this.error = n, this.hasValue = "N" === e
                    }
                    observe(e) {
                        switch (this.kind) {
                            case "N":
                                return e.next && e.next(this.value);
                            case "E":
                                return e.error && e.error(this.error);
                            case "C":
                                return e.complete && e.complete()
                        }
                    }
                    do(e, t, n) {
                        switch (this.kind) {
                            case "N":
                                return e && e(this.value);
                            case "E":
                                return t && t(this.error);
                            case "C":
                                return n && n()
                        }
                    }
                    accept(e, t, n) {
                        return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n)
                    }
                    toObservable() {
                        switch (this.kind) {
                            case "N":
                                return la(this.value);
                            case "E":
                                return e = this.error, new v(t => t.error(e));
                            case "C":
                                return Kl()
                        }
                        var e;
                        throw new Error("unexpected notification kind value")
                    }
                    static
                    createNext(t) {
                        return void 0 !== t ? new e("N", t) : e.undefinedValueNotification
                    }
                    static createError(t) {
                        return new e("E", void 0, t)
                    }
                    static createComplete() {
                        return e.completeNotification
                    }
                }
                return e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
            })();
            class ou extends p {
                constructor(e, t, n = 0) {
                    super(e), this.scheduler = t, this.delay = n
                }
                static dispatch(e) {
                    const {
                        notification: t,
                        destination: n
                    } = e;
                    t.observe(n), this.unsubscribe()
                }
                scheduleMessage(e) {
                    this.destination.add(this.scheduler.schedule(ou.dispatch, this.delay, new au(e, this.destination)))
                }
                _next(e) {
                    this.scheduleMessage(iu.createNext(e))
                }
                _error(e) {
                    this.scheduleMessage(iu.createError(e)), this.unsubscribe()
                }
                _complete() {
                    this.scheduleMessage(iu.createComplete()), this.unsubscribe()
                }
            }
            class au {
                constructor(e, t) {
                    this.notification = e, this.destination = t
                }
            }
            class lu extends E {
                constructor(e = Number.POSITIVE_INFINITY, t = Number.POSITIVE_INFINITY, n) {
                    super(), this.scheduler = n, this._events = [], this._infiniteTimeWindow = !1, this._bufferSize = e < 1 ? 1 : e, this._windowTime = t < 1 ? 1 : t, t === Number.POSITIVE_INFINITY ? (this._infiniteTimeWindow = !0, this.next = this.nextInfiniteTimeWindow) : this.next = this.nextTimeWindow
                }
                nextInfiniteTimeWindow(e) {
                    const t = this._events;
                    t.push(e), t.length > this._bufferSize && t.shift(), super.next(e)
                }
                nextTimeWindow(e) {
                    this._events.push(new uu(this._getNow(), e)), this._trimBufferThenGetEvents(), super.next(e)
                }
                _subscribe(e) {
                    const t = this._infiniteTimeWindow,
                        n = t ? this._events : this._trimBufferThenGetEvents(),
                        r = this.scheduler,
                        s = n.length;
                    let i;
                    if (this.closed) throw new _;
                    if (this.isStopped || this.hasError ? i = h.EMPTY : (this.observers.push(e), i = new b(this, e)), r && e.add(e = new ou(e, r)), t)
                        for (let o = 0; o < s && !e.closed; o++) e.next(n[o]);
                    else
                        for (let o = 0; o < s && !e.closed; o++) e.next(n[o].value);
                    return this.hasError ? e.error(this.thrownError) : this.isStopped && e.complete(), i
                }
                _getNow() {
                    return (this.scheduler || su).now()
                }
                _trimBufferThenGetEvents() {
                    const e = this._getNow(),
                        t = this._bufferSize,
                        n = this._windowTime,
                        r = this._events,
                        s = r.length;
                    let i = 0;
                    for (; i < s && !(e - r[i].time < n);) i++;
                    return s > t && (i = Math.max(i, s - t)), i > 0 && r.splice(0, i), r
                }
            }
            class uu {
                constructor(e, t) {
                    this.time = e, this.value = t
                }
            }

            function cu(e, t, n) {
                let r;
                return r = e && "object" == typeof e ? e : {
                    bufferSize: e,
                    windowTime: t,
                    refCount: !1,
                    scheduler: n
                }, e => e.lift(function({
                    bufferSize: e = Number.POSITIVE_INFINITY,
                    windowTime: t = Number.POSITIVE_INFINITY,
                    refCount: n,
                    scheduler: r
                }) {
                    let s, i, o = 0,
                        a = !1,
                        l = !1;
                    return function(u) {
                        o++, s && !a || (a = !1, s = new lu(e, t, r), i = u.subscribe({
                            next(e) {
                                s.next(e)
                            },
                            error(e) {
                                a = !0, s.error(e)
                            },
                            complete() {
                                l = !0, i = void 0, s.complete()
                            }
                        }));
                        const c = s.subscribe(this);
                        this.add(() => {
                            o--, c.unsubscribe(), i && !l && n && 0 === o && (i.unsubscribe(), i = void 0, s = void 0)
                        })
                    }
                }(r))
            }

            function hu(e, t) {
                return "function" == typeof t ? n => n.pipe(hu((n, r) => V(e(n, r)).pipe(L((e, s) => t(n, e, r, s))))) : t => t.lift(new du(e))
            }
            class du {
                constructor(e) {
                    this.project = e
                }
                call(e, t) {
                    return t.subscribe(new fu(e, this.project))
                }
            }
            class fu extends P {
                constructor(e, t) {
                    super(e), this.project = t, this.index = 0
                }
                _next(e) {
                    let t;
                    const n = this.index++;
                    try {
                        t = this.project(e, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this._innerSub(t, e, n)
                }
                _innerSub(e, t, n) {
                    const r = this.innerSubscription;
                    r && r.unsubscribe();
                    const s = new S(this, t, n),
                        i = this.destination;
                    i.add(s), this.innerSubscription = O(this, e, void 0, void 0, s), this.innerSubscription !== s && i.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: e
                    } = this;
                    e && !e.closed || super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = null
                }
                notifyComplete(e) {
                    this.destination.remove(e), this.innerSubscription = null, this.isStopped && super._complete()
                }
                notifyNext(e, t, n, r, s) {
                    this.destination.next(t)
                }
            }
            class pu {}
            let gu = (() => {
                class e extends pu {
                    getTranslation(e) {
                        return la({})
                    }
                }
                return e.\u0275fac = function(t) {
                    return mu(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const mu = Mn(gu);
            class yu {}
            let vu = (() => {
                class e {
                    handle(e) {
                        return e.key
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function wu(e, t) {
                if (e === t) return !0;
                if (null === e || null === t) return !1;
                if (e != e && t != t) return !0;
                let n, r, s, i = typeof e;
                if (i == typeof t && "object" == i) {
                    if (!Array.isArray(e)) {
                        if (Array.isArray(t)) return !1;
                        for (r in s = Object.create(null), e) {
                            if (!wu(e[r], t[r])) return !1;
                            s[r] = !0
                        }
                        for (r in t)
                            if (!(r in s) && void 0 !== t[r]) return !1;
                        return !0
                    }
                    if (!Array.isArray(t)) return !1;
                    if ((n = e.length) == t.length) {
                        for (r = 0; r < n; r++)
                            if (!wu(e[r], t[r])) return !1;
                        return !0
                    }
                }
                return !1
            }

            function _u(e) {
                return null != e
            }

            function bu(e) {
                return e && "object" == typeof e && !Array.isArray(e)
            }
            class Cu {}
            let Eu = (() => {
                class e extends Cu {
                    constructor() {
                        super(...arguments), this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g
                    }
                    interpolate(e, t) {
                        let n;
                        return n = "string" == typeof e ? this.interpolateString(e, t) : "function" == typeof e ? this.interpolateFunction(e, t) : e, n
                    }
                    getValue(e, t) {
                        let n = "string" == typeof t ? t.split(".") : [t];
                        t = "";
                        do {
                            t += n.shift(), !_u(e) || !_u(e[t]) || "object" != typeof e[t] && n.length ? n.length ? t += "." : e = void 0 : (e = e[t], t = "")
                        } while (n.length);
                        return e
                    }
                    interpolateFunction(e, t) {
                        return e(t)
                    }
                    interpolateString(e, t) {
                        return t ? e.replace(this.templateMatcher, (e, n) => {
                            let r = this.getValue(t, n);
                            return _u(r) ? r : e
                        }) : e
                    }
                }
                return e.\u0275fac = function(t) {
                    return xu(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const xu = Mn(Eu);
            class Tu {}
            let Su = (() => {
                class e extends Tu {
                    compile(e, t) {
                        return e
                    }
                    compileTranslations(e, t) {
                        return e
                    }
                }
                return e.\u0275fac = function(t) {
                    return ku(t || e)
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const ku = Mn(Su);
            class Iu {
                constructor() {
                    this.currentLang = this.defaultLang, this.translations = {}, this.langs = [], this.onTranslationChange = new fo, this.onLangChange = new fo, this.onDefaultLangChange = new fo
                }
            }
            const Nu = new Le("USE_STORE"),
                Au = new Le("USE_DEFAULT_LANG"),
                Du = new Le("DEFAULT_LANGUAGE"),
                Ru = new Le("USE_EXTEND");
            let Ou = (() => {
                    class e {
                        constructor(e, t, n, r, s, i = !0, o = !1, a = !1, l) {
                            this.store = e, this.currentLoader = t, this.compiler = n, this.parser = r, this.missingTranslationHandler = s, this.useDefaultLang = i, this.isolate = o, this.extend = a, this.pending = !1, this._onTranslationChange = new fo, this._onLangChange = new fo, this._onDefaultLangChange = new fo, this._langs = [], this._translations = {}, this._translationRequests = {}, l && this.setDefaultLang(l)
                        }
                        get onTranslationChange() {
                            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange
                        }
                        get onLangChange() {
                            return this.isolate ? this._onLangChange : this.store.onLangChange
                        }
                        get onDefaultLangChange() {
                            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange
                        }
                        get defaultLang() {
                            return this.isolate ? this._defaultLang : this.store.defaultLang
                        }
                        set defaultLang(e) {
                            this.isolate ? this._defaultLang = e : this.store.defaultLang = e
                        }
                        get currentLang() {
                            return this.isolate ? this._currentLang : this.store.currentLang
                        }
                        set currentLang(e) {
                            this.isolate ? this._currentLang = e : this.store.currentLang = e
                        }
                        get langs() {
                            return this.isolate ? this._langs : this.store.langs
                        }
                        set langs(e) {
                            this.isolate ? this._langs = e : this.store.langs = e
                        }
                        get translations() {
                            return this.isolate ? this._translations : this.store.translations
                        }
                        set translations(e) {
                            this.isolate ? this._translations = e : this.store.translations = e
                        }
                        setDefaultLang(e) {
                            if (e === this.defaultLang) return;
                            let t = this.retrieveTranslations(e);
                            void 0 !== t ? (null == this.defaultLang && (this.defaultLang = e), t.pipe(Gl(1)).subscribe(t => {
                                this.changeDefaultLang(e)
                            })) : this.changeDefaultLang(e)
                        }
                        getDefaultLang() {
                            return this.defaultLang
                        }
                        use(e) {
                            if (e === this.currentLang) return la(this.translations[e]);
                            let t = this.retrieveTranslations(e);
                            return void 0 !== t ? (this.currentLang || (this.currentLang = e), t.pipe(Gl(1)).subscribe(t => {
                                this.changeLang(e)
                            }), t) : (this.changeLang(e), la(this.translations[e]))
                        }
                        retrieveTranslations(e) {
                            let t;
                            return (void 0 === this.translations[e] || this.extend) && (this._translationRequests[e] = this._translationRequests[e] || this.getTranslation(e), t = this._translationRequests[e]), t
                        }
                        getTranslation(e) {
                            this.pending = !0;
                            const t = this.currentLoader.getTranslation(e).pipe(cu(1), Gl(1));
                            return this.loadingTranslations = t.pipe(L(t => this.compiler.compileTranslations(t, e)), cu(1), Gl(1)), this.loadingTranslations.subscribe({
                                next: t => {
                                    this.translations[e] = this.extend && this.translations[e] ? Object.assign(Object.assign({}, t), this.translations[e]) : t, this.updateLangs(), this.pending = !1
                                },
                                error: e => {
                                    this.pending = !1
                                }
                            }), t
                        }
                        setTranslation(e, t, n = !1) {
                            t = this.compiler.compileTranslations(t, e), this.translations[e] = (n || this.extend) && this.translations[e] ? function e(t, n) {
                                let r = Object.assign({}, t);
                                return bu(t) && bu(n) && Object.keys(n).forEach(s => {
                                    bu(n[s]) ? s in t ? r[s] = e(t[s], n[s]) : Object.assign(r, {
                                        [s]: n[s]
                                    }) : Object.assign(r, {
                                        [s]: n[s]
                                    })
                                }), r
                            }(this.translations[e], t) : t, this.updateLangs(), this.onTranslationChange.emit({
                                lang: e,
                                translations: this.translations[e]
                            })
                        }
                        getLangs() {
                            return this.langs
                        }
                        addLangs(e) {
                            e.forEach(e => {
                                -1 === this.langs.indexOf(e) && this.langs.push(e)
                            })
                        }
                        updateLangs() {
                            this.addLangs(Object.keys(this.translations))
                        }
                        getParsedResult(e, t, n) {
                            let r;
                            if (t instanceof Array) {
                                let r = {},
                                    s = !1;
                                for (let i of t) r[i] = this.getParsedResult(e, i, n), zl(r[i]) && (s = !0);
                                return s ? function(...e) {
                                    if (1 === e.length) {
                                        const t = e[0];
                                        if (l(t)) return Ul(t, null);
                                        if (u(t) && Object.getPrototypeOf(t) === Object.prototype) {
                                            const e = Object.keys(t);
                                            return Ul(e.map(e => t[e]), e)
                                        }
                                    }
                                    if ("function" == typeof e[e.length - 1]) {
                                        const t = e.pop();
                                        return Ul(e = 1 === e.length && l(e[0]) ? e[0] : e, null).pipe(L(e => t(...e)))
                                    }
                                    return Ul(e, null)
                                }(t.map(e => zl(r[e]) ? r[e] : la(r[e]))).pipe(L(e => {
                                    let n = {};
                                    return e.forEach((e, r) => {
                                        n[t[r]] = e
                                    }), n
                                })) : r
                            }
                            if (e && (r = this.parser.interpolate(this.parser.getValue(e, t), n)), void 0 === r && null != this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang && (r = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], t), n)), void 0 === r) {
                                let e = {
                                    key: t,
                                    translateService: this
                                };
                                void 0 !== n && (e.interpolateParams = n), r = this.missingTranslationHandler.handle(e)
                            }
                            return void 0 !== r ? r : t
                        }
                        get(e, t) {
                            if (!_u(e) || !e.length) throw new Error('Parameter "key" required');
                            if (this.pending) return this.loadingTranslations.pipe(ua(n => zl(n = this.getParsedResult(n, e, t)) ? n : la(n))); {
                                let n = this.getParsedResult(this.translations[this.currentLang], e, t);
                                return zl(n) ? n : la(n)
                            }
                        }
                        getStreamOnTranslationChange(e, t) {
                            if (!_u(e) || !e.length) throw new Error('Parameter "key" required');
                            return Bl(Wl(() => this.get(e, t)), this.onTranslationChange.pipe(hu(n => {
                                const r = this.getParsedResult(n.translations, e, t);
                                return "function" == typeof r.subscribe ? r : la(r)
                            })))
                        }
                        stream(e, t) {
                            if (!_u(e) || !e.length) throw new Error('Parameter "key" required');
                            return Bl(Wl(() => this.get(e, t)), this.onLangChange.pipe(hu(n => {
                                const r = this.getParsedResult(n.translations, e, t);
                                return zl(r) ? r : la(r)
                            })))
                        }
                        instant(e, t) {
                            if (!_u(e) || !e.length) throw new Error('Parameter "key" required');
                            let n = this.getParsedResult(this.translations[this.currentLang], e, t);
                            if (zl(n)) {
                                if (e instanceof Array) {
                                    let t = {};
                                    return e.forEach((n, r) => {
                                        t[e[r]] = e[r]
                                    }), t
                                }
                                return e
                            }
                            return n
                        }
                        set(e, t, n = this.currentLang) {
                            this.translations[n][e] = this.compiler.compile(t, n), this.updateLangs(), this.onTranslationChange.emit({
                                lang: n,
                                translations: this.translations[n]
                            })
                        }
                        changeLang(e) {
                            this.currentLang = e, this.onLangChange.emit({
                                lang: e,
                                translations: this.translations[e]
                            }), null == this.defaultLang && this.changeDefaultLang(e)
                        }
                        changeDefaultLang(e) {
                            this.defaultLang = e, this.onDefaultLangChange.emit({
                                lang: e,
                                translations: this.translations[e]
                            })
                        }
                        reloadLang(e) {
                            return this.resetLang(e), this.getTranslation(e)
                        }
                        resetLang(e) {
                            this._translationRequests[e] = void 0, this.translations[e] = void 0
                        }
                        getBrowserLang() {
                            if ("undefined" == typeof window || void 0 === window.navigator) return;
                            let e = window.navigator.languages ? window.navigator.languages[0] : null;
                            return e = e || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage, void 0 !== e ? (-1 !== e.indexOf("-") && (e = e.split("-")[0]), -1 !== e.indexOf("_") && (e = e.split("_")[0]), e) : void 0
                        }
                        getBrowserCultureLang() {
                            if ("undefined" == typeof window || void 0 === window.navigator) return;
                            let e = window.navigator.languages ? window.navigator.languages[0] : null;
                            return e = e || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage, e
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(Iu), Ze(pu), Ze(Tu), Ze(Cu), Ze(yu), Ze(Au), Ze(Nu), Ze(Ru), Ze(Du))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                Pu = (() => {
                    class e {
                        constructor(e, t) {
                            this.translate = e, this._ref = t, this.value = ""
                        }
                        updateValue(e, t, n) {
                            let r = t => {
                                this.value = void 0 !== t ? t : e, this.lastKey = e, this._ref.markForCheck()
                            };
                            if (n) {
                                let s = this.translate.getParsedResult(n, e, t);
                                zl(s.subscribe) ? s.subscribe(r) : r(s)
                            }
                            this.translate.get(e, t).subscribe(r)
                        }
                        transform(e, ...t) {
                            if (!e || !e.length) return e;
                            if (wu(e, this.lastKey) && wu(t, this.lastParams)) return this.value;
                            let n;
                            if (_u(t[0]) && t.length)
                                if ("string" == typeof t[0] && t[0].length) {
                                    let e = t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":').replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                                    try {
                                        n = JSON.parse(e)
                                    } catch (r) {
                                        throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)
                                    }
                                } else "object" != typeof t[0] || Array.isArray(t[0]) || (n = t[0]);
                            return this.lastKey = e, this.lastParams = t, this.updateValue(e, n), this._dispose(), this.onTranslationChange || (this.onTranslationChange = this.translate.onTranslationChange.subscribe(t => {
                                this.lastKey && t.lang === this.translate.currentLang && (this.lastKey = null, this.updateValue(e, n, t.translations))
                            })), this.onLangChange || (this.onLangChange = this.translate.onLangChange.subscribe(t => {
                                this.lastKey && (this.lastKey = null, this.updateValue(e, n, t.translations))
                            })), this.onDefaultLangChange || (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
                                this.lastKey && (this.lastKey = null, this.updateValue(e, n))
                            })), this.value
                        }
                        _dispose() {
                            void 0 !== this.onTranslationChange && (this.onTranslationChange.unsubscribe(), this.onTranslationChange = void 0), void 0 !== this.onLangChange && (this.onLangChange.unsubscribe(), this.onLangChange = void 0), void 0 !== this.onDefaultLangChange && (this.onDefaultLangChange.unsubscribe(), this.onDefaultLangChange = void 0)
                        }
                        ngOnDestroy() {
                            this._dispose()
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Xs(Ou), function(e = ie.Default) {
                            const t = function(e = !1) {
                                return function(e, t, n) {
                                    if (!n && vt(e)) {
                                        const n = Nt(e.index, t);
                                        return new ws(n, n)
                                    }
                                    return 3 === e.type || 0 === e.type || 4 === e.type || 5 === e.type ? new ws(t[16], t) : null
                                }(Mt(), jt(), e)
                            }(!0);
                            if (null != t || e & ie.Optional) return t;
                            throw new Error("No provider for ChangeDetectorRef!")
                        }())
                    }, e.\u0275pipe = ht({
                        name: "translate",
                        type: e,
                        pure: !1
                    }), e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                Lu = (() => {
                    class e {
                        static forRoot(t = {}) {
                            return {
                                ngModule: e,
                                providers: [t.loader || {
                                    provide: pu,
                                    useClass: gu
                                }, t.compiler || {
                                    provide: Tu,
                                    useClass: Su
                                }, t.parser || {
                                    provide: Cu,
                                    useClass: Eu
                                }, t.missingTranslationHandler || {
                                    provide: yu,
                                    useClass: vu
                                }, Iu, {
                                    provide: Nu,
                                    useValue: t.isolate
                                }, {
                                    provide: Au,
                                    useValue: t.useDefaultLang
                                }, {
                                    provide: Ru,
                                    useValue: t.extend
                                }, {
                                    provide: Du,
                                    useValue: t.defaultLanguage
                                }, Ou]
                            }
                        }
                        static forChild(t = {}) {
                            return {
                                ngModule: e,
                                providers: [t.loader || {
                                    provide: pu,
                                    useClass: gu
                                }, t.compiler || {
                                    provide: Tu,
                                    useClass: Su
                                }, t.parser || {
                                    provide: Cu,
                                    useClass: Eu
                                }, t.missingTranslationHandler || {
                                    provide: yu,
                                    useClass: vu
                                }, {
                                    provide: Nu,
                                    useValue: t.isolate
                                }, {
                                    provide: Au,
                                    useValue: t.useDefaultLang
                                }, {
                                    provide: Ru,
                                    useValue: t.extend
                                }, {
                                    provide: Du,
                                    useValue: t.defaultLanguage
                                }, Ou]
                            }
                        }
                    }
                    return e.\u0275mod = lt({
                        type: e
                    }), e.\u0275inj = le({
                        factory: function(t) {
                            return new(t || e)
                        }
                    }), e
                })();
            let ju = (() => {
                    class e {
                        constructor() {
                            this.widgetEventToFSA = e => {
                                const {
                                    type: t,
                                    detail: {
                                        payload: n,
                                        error: r,
                                        meta: s
                                    }
                                } = e;
                                return {
                                    type: t,
                                    payload: n,
                                    error: r,
                                    meta: s
                                }
                            }
                        }
                        publishWidgetEvent(e, t) {
                            const n = new CustomEvent(e, {
                                detail: {
                                    payload: t
                                }
                            });
                            window.dispatchEvent(n)
                        }
                        createWidgetEventPublisher(e, t) {
                            this.publishWidgetEvent(e, t)
                        }
                        subscribeToWidgetEvent(e, t) {
                            return window.addEventListener(e, t), () => {
                                window.removeEventListener(e, t)
                            }
                        }
                        subscribeToWidgetEvents(e, t) {
                            return e.forEach(e => window.addEventListener(e, t)), () => {
                                e.forEach(e => window.removeEventListener(e, t))
                            }
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac,
                        providedIn: "root"
                    }), e
                })(),
                Fu = (() => {
                    class e {
                        constructor(e) {
                            this.httpClient = e
                        }
                        getSeedscard(e = {}) {
                            const {
                                id: t,
                                cardname: n
                            } = e;
                            return this.httpClient.get(`${aa}/banking/api/${n}s/${t}`)
                        }
                        getSeedsCardByUserID(e, t) {
                            return this.httpClient.get(`${aa.domainUrl}/banking/api/${t}/user/${e}`)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Ze(Ka))
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac,
                        providedIn: "root"
                    }), e
                })(),
                Mu = (() => {
                    class e {
                        transform(e) {
                            if (!e) return "";
                            let t = "...";
                            return e.length >= 4 && (t += e.substring(e.length - 4, e.length)), t
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275pipe = ht({
                        name: "creditCard",
                        type: e,
                        pure: !0
                    }), e
                })();

            function Vu(e, t) {
                if (1 & e && (ni(0, "p", 14), ci(1), lo(2, "translate"), ni(3, "span", 15), ci(4), ri(), ri()), 2 & e) {
                    const e = ui(2);
                    dr(1), hi(" ", uo(2, 2, "label.common.rewardPoints"), ": "), dr(3), hi(" ", e.seedCard.rewardPoints, " ")
                }
            }

            function Hu(e, t) {
                if (1 & e && (ni(0, "div", 10), ni(1, "p", 11), ci(2), lo(3, "currency"), ri(), ni(4, "p", 12), ci(5), lo(6, "translate"), ri(), Qs(7, Vu, 5, 4, "p", 13), ri()), 2 & e) {
                    const e = ui();
                    dr(2), hi(" ", uo(3, 3, null == e.seedCard ? null : e.seedCard.balance), " "), dr(3), hi(" ", uo(6, 5, "label.common.balance"), " "), dr(2), ei("ngIf", null == e.seedCard ? null : e.seedCard.rewardPoints)
                }
            }
            const $u = function(e) {
                return {
                    cardName: e
                }
            };

            function zu(e, t) {
                if (1 & e && (ni(0, "div"), ni(1, "p", 12), ci(2), lo(3, "translate"), ri(), ri()), 2 & e) {
                    const e = ui();
                    dr(2), hi(" ", function(e, t, n, r) {
                        const s = jt(),
                            i = It(s, 3);
                        return ho(s, co(s, 3) ? function(e, t, n, r, s, i, o) {
                            const a = t + n;
                            return function(e, t, n, r) {
                                const s = Js(e, t, n);
                                return Js(e, t + 1, r) || s
                            }(e, a, s, i) ? Ys(e, a + 2, o ? r.call(o, s, i) : r(s, i)) : oo(e, a + 2)
                        }(s, Ut(), 1, i.transform, n, r, i) : i.transform(n, r))
                    }(0, 0, "label.common.noCheckingAccount", (4, n = $u, r = e.cardName, ao(jt(), Ut(), 4, n, r, void 0))), " ")
                }
                var n, r
            }
            let Uu = (() => {
                class e {
                    constructor(e, t) {
                        this.cardService = e, this.widgetEventService = t, this.env = aa, this.firstCall = !0
                    }
                    ngOnInit() {
                        this.cardService.getSeedsCardByUserID(this.keycloak.idTokenParsed.preferred_username, this.cardName).subscribe(e => {
                            this.seedCard = e, "checking" === this.cardName && this.firstCall && (this.firstCall = !1, this.onDetail())
                        }, e => console.error(e))
                    }
                    onDetail() {
                        if (this.seedCard && this.seedCard.id) {
                            const e = {
                                cardname: this.cardName,
                                accountID: this.seedCard.id
                            };
                            console.log(e), this.widgetEventService.createWidgetEventPublisher("seedscard.transactionsDetail", e)
                        }
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Xs(Fu), Xs(ju))
                }, e.\u0275cmp = st({
                    type: e,
                    selectors: [
                        ["app-card"]
                    ],
                    inputs: {
                        cardName: "cardName",
                        keycloak: "keycloak"
                    },
                    decls: 14,
                    vars: 9,
                    consts: [
                        [3, "click"],
                        [1, "seeds-card"],
                        [1, "seeds-card-header"],
                        [1, "seeds-card-icon", 3, "src"],
                        [1, "seeds-card-title"],
                        [1, "seeds-card-value"],
                        [1, "seeds-card-action"],
                        [1, "fas", "fa-ellipsis-v"],
                        ["class", "seeds-card-body", 4, "ngIf"],
                        [4, "ngIf"],
                        [1, "seeds-card-body"],
                        [1, "seeds-card-balance"],
                        [1, "seeds-card-balance-caption"],
                        ["class", "seeds-card-balance-reward", 4, "ngIf"],
                        [1, "seeds-card-balance-reward"],
                        [1, "seeds-card-balance-reward-value"]
                    ],
                    template: function(e, t) {
                        1 & e && (ni(0, "div", 0), oi("click", (function() {
                            return t.onDetail()
                        })), ni(1, "div", 1), ni(2, "div", 2), si(3, "img", 3), ni(4, "div", 4), ci(5), lo(6, "translate"), ri(), ni(7, "div", 5), ci(8), lo(9, "creditCard"), ri(), ni(10, "div", 6), si(11, "i", 7), ri(), ri(), Qs(12, Hu, 8, 7, "div", 8), Qs(13, zu, 4, 6, "div", 9), ri(), ri()), 2 & e && (dr(3), ei("src", t.env.assetsPath + "/Framecredit-card.png", Yn), dr(2), hi(" ", uo(6, 5, "label.common." + t.cardName), " "), dr(3), hi(" ", uo(9, 7, null == t.seedCard ? null : t.seedCard.accountNumber), " "), dr(4), ei("ngIf", t.seedCard), dr(1), ei("ngIf", !t.seedCard))
                    },
                    directives: [Ta],
                    pipes: [Pu, Mu, Ia],
                    styles: [".seeds-card[_ngcontent-%COMP%]{background:#f2f4f7;box-shadow:0 0 18px rgba(0,0,0,.25);transition:.3s ease}.seeds-card[_ngcontent-%COMP%], .seeds-card[_ngcontent-%COMP%]:hover{height:300px;padding:10%;border-radius:20px}.seeds-card[_ngcontent-%COMP%]:hover{background:rgba(122,183,116,.05);box-shadow:0 0 18px #7ab774}.seeds-card-header[_ngcontent-%COMP%]{display:flex;align-items:baseline;position:relative}.seeds-card-title[_ngcontent-%COMP%]{font-weight:500;font-size:30px;color:#0e6837;margin:0 20px;line-height:35px}.seeds-card-value[_ngcontent-%COMP%]{font-size:16px;color:#c7c7c7;line-height:33px}.seeds-card-action[_ngcontent-%COMP%]{position:absolute;right:0;top:19%;color:#c7c7c7}.seeds-card-balance[_ngcontent-%COMP%]{font-weight:500;font-size:50px;color:#000;margin:10% 0 0}.seeds-card-balance-caption[_ngcontent-%COMP%]{font-weight:500;font-size:18px;color:#67676b}.seeds-card-balancereward[_ngcontent-%COMP%]{font-weight:500;font-size:18px;color:#c7c7c7}.seeds-card-balance-reward-value[_ngcontent-%COMP%]{font-weight:500;font-size:18px;color:#000}"]
                }), e
            })();

            function Bu(e, t) {
                1 & e && (ni(0, "div"), ci(1, " Waiting for authorization...\n"), ri())
            }

            function Zu(e, t) {
                if (1 & e && si(0, "app-card", 2), 2 & e) {
                    const e = ui();
                    ei("cardName", e.cardname)("keycloak", e.keycloak)
                }
            }
            const Ku = () => window && window.entando && window.entando.keycloak && Object.assign(Object.assign({}, window.entando.keycloak), {
                initialized: !0
            }) || {
                initialized: !1
            };
            let Wu = (() => {
                    class e {
                        constructor(e) {
                            this.widgetEventService = e, this.keycloak = Ku(), this.unsubscribeFromKeycloakEvent = null
                        }
                        ngOnInit() {
                            this.keycloak = Object.assign(Object.assign({}, Ku()), {
                                initialized: !0
                            }), this.unsubscribeFromKeycloakEvent = this.widgetEventService.subscribeToWidgetEvent("keycloak", () => {
                                this.keycloak = Object.assign(Object.assign({}, Ku()), {
                                    initialized: !0
                                })
                            })
                        }
                        ngOnDestroy() {
                            this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent()
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(Xs(ju))
                    }, e.\u0275cmp = st({
                        type: e,
                        selectors: [
                            ["app-root"]
                        ],
                        inputs: {
                            cardname: "cardname"
                        },
                        decls: 3,
                        vars: 2,
                        consts: [
                            [4, "ngIf", "ngIfElse"],
                            ["elseBlock", ""],
                            [3, "cardName", "keycloak"]
                        ],
                        template: function(e, t) {
                            if (1 & e && (Qs(0, Bu, 2, 0, "div", 0), Qs(1, Zu, 1, 2, "ng-template", null, 1, po)), 2 & e) {
                                const e = It(Pt.lFrame.contextLView, 2);
                                ei("ngIf", !(t.keycloak.initialized && t.keycloak.authenticated))("ngIfElse", e)
                            }
                        },
                        directives: [Ta, Uu],
                        styles: [""]
                    }), e
                })(),
                qu = (() => {
                    class e {
                        getKeycloakToken() {
                            return window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated ? window.entando.keycloak.token : ""
                        }
                        getDefaultOptions() {
                            return {
                                Authorization: `Bearer ${this.getKeycloakToken()}`,
                                "Content-Type": "application/json"
                            }
                        }
                        intercept(e, t) {
                            const n = this.getDefaultOptions();
                            return e = e.clone({
                                setHeaders: n
                            }), t.handle(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = ae({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                Gu = (() => {
                    class e {}
                    return e.\u0275mod = lt({
                        type: e
                    }), e.\u0275inj = le({
                        factory: function(t) {
                            return new(t || e)
                        },
                        imports: [
                            [Na]
                        ]
                    }), e
                })();
            var Yu = n("C/0J"),
                Ju = n("G8wc");
            let Qu = (() => {
                class e {
                    constructor(e) {
                        this.translate = e
                    }
                    initialize() {
                        this.translate.use(window.navigator.language.split("-")[0]), this.translate.setTranslation("en", Yu), this.translate.setTranslation("it", Ju)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(Ze(Ou))
                }, e.\u0275prov = ae({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })();

            function Xu(e) {
                return () => e.initialize()
            }
            let ec = (() => {
                class e {
                    constructor(e) {
                        this.injector = e
                    }
                    ngDoBootstrap() {
                        const e = function(e, t) {
                            const n = function(e, t) {
                                    return t.get(mi).resolveComponentFactory(e).inputs
                                }(e, t.injector),
                                r = t.strategyFactory || new hl(e, t.injector),
                                s = function(e) {
                                    const t = {};
                                    return e.forEach(({
                                        propName: e,
                                        templateName: n
                                    }) => {
                                        var r;
                                        t[(r = n, r.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`))] = e
                                    }), t
                                }(n);
                            class i extends fl {
                                constructor(e) {
                                    super(), this.ngElementStrategy = r.create(e || t.injector)
                                }
                                attributeChangedCallback(e, n, i, o) {
                                    this.ngElementStrategy || (this.ngElementStrategy = r.create(t.injector)), this.ngElementStrategy.setInputValue(s[e], i)
                                }
                                connectedCallback() {
                                    this.ngElementStrategy || (this.ngElementStrategy = r.create(t.injector)), this.ngElementStrategy.connect(this), this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(e => {
                                        const t = function(e, t, n) {
                                            if ("function" != typeof CustomEvent) {
                                                const r = e.createEvent("CustomEvent");
                                                return r.initCustomEvent(t, !1, !1, n), r
                                            }
                                            return new CustomEvent(t, {
                                                bubbles: !1,
                                                cancelable: !1,
                                                detail: n
                                            })
                                        }(this.ownerDocument, e.name, e.value);
                                        this.dispatchEvent(t)
                                    })
                                }
                                disconnectedCallback() {
                                    this.ngElementStrategy && this.ngElementStrategy.disconnect(), this.ngElementEventsSubscription && (this.ngElementEventsSubscription.unsubscribe(), this.ngElementEventsSubscription = null)
                                }
                            }
                            return i.observedAttributes = Object.keys(s), n.map(({
                                propName: e
                            }) => e).forEach(e => {
                                Object.defineProperty(i.prototype, e, {
                                    get: function() {
                                        return this.ngElementStrategy.getInputValue(e)
                                    },
                                    set: function(t) {
                                        this.ngElementStrategy.setInputValue(e, t)
                                    },
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }), i
                        }(Wu, {
                            injector: this.injector
                        });
                        customElements.define("ng-seedscard-details", e)
                    }
                }
                return e.\u0275mod = lt({
                    type: e
                }), e.\u0275inj = le({
                    factory: function(t) {
                        return new(t || e)(Ze(Vs))
                    },
                    providers: [{
                        provide: go,
                        useFactory: Xu,
                        deps: [Qu],
                        multi: !0
                    }, {
                        provide: qa,
                        useClass: qu,
                        multi: !0
                    }],
                    imports: [
                        [$l, al, Gu, Lu.forRoot({
                            defaultLanguage: "en"
                        })]
                    ]
                }), e
            })();
            aa.production && function() {
                if (Zn) throw new Error("Cannot enable prod mode after platform setup.");
                Bn = !1
            }(), Vl().bootstrapModule(ec).catch(e => console.error(e))
        },
        zn8P: function(e, t) {
            function n(e) {
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }))
            }
            n.keys = function() {
                return []
            }, n.resolve = n, e.exports = n, n.id = "zn8P"
        }
    },
    [
        [0, 0]
    ]
]);